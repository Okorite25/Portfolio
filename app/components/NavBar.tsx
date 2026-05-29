"use client"
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f1a]/90 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center w-14 h-10">
          <img src="/img/myLogoBG.png" alt="logo" className="w-full h-full object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] text-white/75 hover:text-[#A78BFA] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger — visible only on mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown — inline styles so the transition always works */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.25s ease",
          background: "rgba(8, 12, 22, 0.97)",
          backdropFilter: "blur(20px)",
          borderTop: open ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-[17px] font-medium text-white/60 hover:text-[#A78BFA] hover:bg-[#A78BFA]/10 transition-all duration-200"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"
                aria-hidden="true"
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}