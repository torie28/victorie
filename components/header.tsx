"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#heritage" },
    { name: "Upcoming Tours", href: "#expeditions" },
    { name: "Contacts", href: "#gallery" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 bg-transparent",
        isScrolled ? "py-4" : "py-8",
      )}
    >
      <div className="flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 ml-8 md:ml-28">
          <div className="relative h-20 w-32 overflow-hidden border border-white/5">
            <Image
              src="/images/logo/solskinnlogoframe.jpg"
              alt="Victoria Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
            className={cn(
              "text-3xl font-bold tracking-[0.2em] transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white",
            )}
          >
            VICTORIA
          </span>
        </Link>

        {/* Menu Button (Desktop & Mobile) */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className={cn(
                "flex items-center gap-3 group transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-white",
              )}
              aria-label="Toggle menu"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] hidden sm:block group-hover:opacity-70 transition-opacity">
                Menu
              </span>
              <div
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isScrolled
                    ? "bg-foreground/5 hover:bg-foreground/10"
                    : "bg-white/10 group-hover:bg-white/20",
                )}
              >
                <Menu size={20} />
              </div>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[450px] bg-background/80 backdrop-blur-2xl border-l-border/10 flex flex-col p-0"
          >
            <div className="flex flex-col h-full px-8 sm:px-12">
              <SheetHeader className="text-left pt-12 pb-8 border-b border-border/10">
                <SheetTitle className="flex items-center gap-4">
                  <div className="relative h-16 w-24 overflow-hidden border border-border/5">
                    <Image
                      src="/images/logo/solskinnlogoframe.jpg"
                      alt="Victoria Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-2xl font-bold tracking-[0.3em]">
                    VICTORIA
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-8 mt-16">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-3xl font-light hover:text-primary transition-all tracking-tight animate-in fade-in slide-in-from-right-8 duration-700 fill-mode-both"
                    style={{ animationDelay: `${150 + index * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}

                <div
                  className="pt-4 animate-in fade-in slide-in-from-right-8 duration-700 fill-mode-both"
                  style={{ animationDelay: "600ms" }}
                >
                  <Link
                    href="#reserve"
                    className="inline-block bg-foreground text-background px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all"
                  >
                    Begin Your Journey
                  </Link>
                </div>
              </nav>

              <div
                className="mt-auto pb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
                style={{ animationDelay: "800ms" }}
              >
                <div className="grid grid-cols-2 gap-8 border-t border-border/10 pt-10">
                  <div className="space-y-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
                      Inquiries
                    </p>
                    <p className="text-sm font-medium">travel@victoria.com</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
                      Follow Us
                    </p>
                    <div className="flex gap-6 text-sm font-medium">
                      <a
                        href="#"
                        className="hover:text-primary transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
