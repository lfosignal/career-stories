import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold">
          Career Stories
        </Link>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          <a href="#problems" className="text-muted-foreground hover:text-foreground">
            Проблемы
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground">
            Услуги
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground">
            FAQ
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">
            Контакты
          </a>
        </nav>
        <Button asChild size="sm" className="ml-4">
          <a href="#contact">Записаться</a>
        </Button>
      </div>
    </header>
  )
}


