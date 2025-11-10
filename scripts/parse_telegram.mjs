import fs from "fs";
import path from "path";

const root = path.resolve(process.cwd(), "ChatExport_2025-11-10");
const htmlPath = path.join(root, "messages.html");

function readHtml(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»")
    .replace(/&amp;/g, "&")
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseMessages(html) {
  const parts = html.split('<div class="message ');
  const messages = [];
  for (let i = 1; i < parts.length; i++) {
    const block = '<div class="message ' + parts[i];

    // date
    let dateIso = null;
    const dateMatch = block.match(
      /<div class="pull_right date details"[^>]*title="(\d{2})\.(\d{2})\.(\d{4})[^"]*"/
    );
    if (dateMatch) {
      const [_, dd, mm, yyyy] = dateMatch;
      dateIso = `${yyyy}-${mm}-${dd}`;
    }

    // text(s)
    const texts = [];
    const textRegex = /<div class="text">([\s\S]*?)<\/div>/g;
    let m;
    while ((m = textRegex.exec(block)) !== null) {
      texts.push(stripTags(m[1]));
    }
    const text = texts.join("\n\n");

    // media flags
    const hasPoll = block.includes("media_poll");
    const hasRoundVideo =
      block.includes("round_video_messages/") ||
      block.includes("media_video");
    const hasVideo = hasRoundVideo || block.includes("video_file_wrap");
    const hasVoice =
      block.includes("voice_messages/") || block.includes(".ogg");
    const hasPhoto = block.includes('class="photo"') || block.includes("photos/");
    const hasFile = block.includes("files/") || block.includes(".pdf");

    // reactions
    const reactions = [];
    const reactionRegex =
      /<span class="reaction">[\s\S]*?<span class="emoji">\s*([\s\S]*?)\s*<\/span>[\s\S]*?<span class="count">\s*(\d+)\s*<\/span>[\s\S]*?<\/span>/g;
    let r;
    while ((r = reactionRegex.exec(block)) !== null) {
      const emoji = stripTags(r[1]).trim();
      const count = Number(r[2]);
      reactions.push({ emoji, count });
    }
    const totalReactions = reactions.reduce((s, x) => s + x.count, 0);

    messages.push({
      date: dateIso,
      text,
      media: {
        poll: hasPoll,
        video: hasVideo,
        voice: hasVoice,
        photo: hasPhoto,
        file: hasFile,
      },
      reactions,
      totalReactions,
      rawLength: block.length,
    });
  }
  return messages;
}

function detectThemes(messages) {
  const themes = {
    careerOrientation: {
      title: "Профориентация и развитие карьеры",
      match: (t) =>
        /карьер|профориент|специальност|профес|развив|рост|навык|ресурсн|выгор|интерес|смысл|мотивац/i.test(
          t
        ),
      items: [],
    },
    jobSearch: {
      title: "Поиск работы, резюме, собеседования",
      match: (t) =>
        /резюм|сопровод|собесед|ваканси|headhunter|linkedin|работ|интервью|job/i.test(
          t
        ),
      items: [],
    },
    education: {
      title: "Обучение, курсы, вебинары, анонсы",
      match: (t) =>
        /курс|вебинар|мастер-?класс|регистрац|анонс|лекци|участ/i.test(t),
      items: [],
    },
    polls: {
      title: "Опросы и вовлеченность",
      match: (_, m) => m.media.poll === true,
      items: [],
    },
    stories: {
      title: "Истории, кейсы, отзывы",
      match: (t) => /кейс|истор|отзыв|пример/i.test(t),
      items: [],
    },
    mediaPosts: {
      title: "Медиа-посты (видео/фото/голос/файлы)",
      match: (_, m) =>
        m.media.video || m.media.photo || m.media.voice || m.media.file,
      items: [],
    },
  };

  for (const msg of messages) {
    const t = (msg.text || "").toLowerCase();
    for (const key of Object.keys(themes)) {
      const th = themes[key];
      if (th.match.length === 2) {
        // function expects (text, message)
        if (th.match(t, msg)) th.items.push(msg);
      } else {
        if (th.match(t)) th.items.push(msg);
      }
    }
  }

  return themes;
}

function summarize(themes, messages) {
  const total = messages.length;
  const dated = messages.filter((m) => m.date);
  const dates = dated.map((m) => m.date).sort();
  const range =
    dates.length > 0 ? { from: dates[0], to: dates[dates.length - 1] } : null;

  const mediaTotals = messages.reduce(
    (acc, m) => {
      for (const k of Object.keys(m.media)) {
        if (m.media[k]) acc[k] += 1;
      }
      acc.reactions += m.totalReactions;
      return acc;
    },
    { video: 0, photo: 0, voice: 0, file: 0, poll: 0, reactions: 0 }
  );

  const themeSummary = Object.values(themes).map((th) => {
    // Возьмём 3 самых реактивных поста как примеры
    const examples = [...th.items]
      .sort((a, b) => b.totalReactions - a.totalReactions)
      .slice(0, 3)
      .map((m) => ({
        date: m.date,
        reactions: m.totalReactions,
        snippet: (m.text || "").split("\n").join(" ").slice(0, 180),
        media: m.media,
      }));
    return {
      title: th.title,
      count: th.items.length,
      examples,
    };
  });

  return { total, range, mediaTotals, themeSummary };
}

function writeReports(summary, outDir) {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, "telegram_summary.json"),
    JSON.stringify(summary, null, 2),
    "utf8"
  );

  const lines = [];
  lines.push(`# Telegram summary`);
  if (summary.range) {
    lines.push(`Период: ${summary.range.from} — ${summary.range.to}`);
  }
  lines.push(`Всего сообщений: ${summary.total}`);
  lines.push(
    `Медиа: видео ${summary.mediaTotals.video}, фото ${summary.mediaTotals.photo}, голос ${summary.mediaTotals.voice}, файлы ${summary.mediaTotals.file}, опросы ${summary.mediaTotals.poll}`
  );
  lines.push(`Всего реакций: ${summary.mediaTotals.reactions}`);
  lines.push("");
  for (const th of summary.themeSummary) {
    lines.push(`## ${th.title} — ${th.count}`);
    for (const ex of th.examples) {
      lines.push(
        `- ${ex.date || "без даты"} · ❤ ${ex.reactions} · ${ex.snippet}${
          ex.snippet.length >= 180 ? "…" : ""
        }`
      );
    }
    lines.push("");
  }
  fs.writeFileSync(
    path.join(outDir, "telegram_summary.md"),
    lines.join("\n"),
    "utf8"
  );
}

function main() {
  const html = readHtml(htmlPath);
  const messages = parseMessages(html);
  const themes = detectThemes(messages);
  const summary = summarize(themes, messages);
  writeReports(summary, path.resolve(process.cwd(), "reports"));
  console.log(
    `Parsed ${messages.length} messages. Report written to ./reports/telegram_summary.{json,md}`
  );
}

main();


