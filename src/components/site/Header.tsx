import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { siteContent } from "@/content/site"

export function Header() {
  return (
    <header className="relative z-50 flex justify-center px-4">
      <div className="sticky top-4 z-40 mt-6 flex w-full max-w-[62rem] items-center justify-between rounded-[44px] border border-white/40 border-b-[#3E6DB0]/15 bg-white/40 px-8 py-4 shadow-[0_30px_80px_rgба(62,109,176,0.14)] backdrop-blur">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-[#343434]">
          <span className="relative flex size-3 items-center justify-center">
            <span className="absolute inline-flex size-4 rounded-full bg-[#FB411F]/30" />
            <span className="relative inline-flex size-2 rounded-full bg-[#FB411F] shadow-[0_0_0_6px_rgба(251,65,31,0.18)]" />
          </span>
          {siteContent.brand.name}
        </Link>
        <nav className="hidden items-center gap-6 text-[14px] font-medium text-[#3C3C3C] md:flex">
          <a href="#about" className="transition hover:text-black">
            Обо мне
          </a>
          <a href="#problems" className="transition hover:text-black">
            Проблемы
          </a>
          <a href="#services" className="transition hover:text-black">
            Услуги
          </a>
          <a href="#testimonials" className="transition hover:text-black">
            Отзывы
          </a>
          <a href="#faq" className="transition hover:text-black">
            FAQ
          </a>
          <a href="#contact" className="transition hover:text-black">
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
        <span className="hidden md:inline-flex">
          <Button size="sm" className="bg-white/30 text-[#343434]">
            Связаться
          </Button>
        </span>
      </div>
    </header>
  )
}


