import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { siteContent } from "@/content/site"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[var(--page-max-width)] items-center justify-between px-[var(--page-padding)]">
        <Link href="/" className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.38em] text-muted-foreground">
          <span className="relative flex size-2 items-center justify-center">
            <span className="absolute inline-flex size-3 rounded-full bg-primary/30" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(251,65,31,0.18)]" />
          </span>
          {siteContent.brand.name}
        </Link>
        <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.32em] md:flex">
          <a href="#about" className="text-muted-foreground transition hover:text-foreground">
            Обо мне
          </a>
          <a href="#problems" className="text-muted-foreground transition hover:text-foreground">
            Проблемы
          </a>
          <a href="#services" className="text-muted-foreground transition hover:text-foreground">
            Услуги
          </a>
          <a href="#testimonials" className="text-muted-foreground transition hover:text-foreground">
            Отзывы
          </a>
          <a href="#faq" className="text-muted-foreground transition hover:text-foreground">
            FAQ
          </a>
          <a href="#contact" className="text-muted-foreground transition hover:text-foreground">
            Контакты
          </a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Меню" className="rounded-full">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-10 grid gap-4 text-sm">
                <a href="#about">Обо мне</a>
                <a href="#problems">Проблемы</a>
                <a href="#services">Услуги</a>
                <a href="#testimonials">Отзывы</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Контакты</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <span className="ml-4 hidden md:inline-flex">
          <Button asChild size="sm">
            <a href="#contact">Бесплатная консультация</a>
          </Button>
        </span>
      </div>
    </header>
  )
}


