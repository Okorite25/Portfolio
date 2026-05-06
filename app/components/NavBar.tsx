"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <main className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f1a] border-b border-border/4">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className=" flex ml-8 w-20 h-15 font-display text-xl font-bold text-gradient">
          <img src="/img/myLogoBG.png" alt="logo" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-white hover:text-[#A78BFA] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* <div className="hidden md:block">
        <a href="#contact">
            <Button variant="outline" size="sm" className="rounded-full text-lg border-primary text-primary p-4 px-8 hover:bg-[#A78BFA] hover:text-white transition duration-500">
              Contact Me
            </Button>
        </a>
        </div> */}

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            {/* <Button variant="outline" size="sm" asChild className="rounded-full border-primary text-primary w-fit">
              <Link href="#contact">Contact Me</Link>
            </Button> */}
          </nav>
        </div>
      )}
    </main>
  );
}
