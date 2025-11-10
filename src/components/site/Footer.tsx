export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Career Stories</p>
        <div className="flex items-center gap-4">
          <a href="mailto:you@example.com" className="hover:text-foreground">
            Email
          </a>
          <a href="#" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="#" className="hover:text-foreground">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  )
}


