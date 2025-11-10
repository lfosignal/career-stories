import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { siteContent } from "@/content/site"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold">
          {siteContent.brand.name}
        </Link>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          <a href="#about" className="text-muted-foreground hover:text-foreground">
            Обо мне
          </a>
          <a href="#problems" className="text-muted-foreground hover:text-foreground">
            Проблемы
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground">
            Услуги
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground">
            Отзывы
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground">
            FAQ
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">
            Контакты
          </a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Меню">
                <Menu className="size-4" />
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
        <span className="ml-4 hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px] md:inline-flex">
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Бесплатная консультация</a>
          </Button>
        </span>
      </div>
    </header>
  )
}


