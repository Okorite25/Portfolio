import { Button } from "../components/ui/button";
import avatar from "@/assets/hero-avatar.png";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-radial)" }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-50" style={{ background: "var(--gradient-primary)" }} />
            <img
              src={"/img/Georgina.png"}
              alt="David-West Okorite Georgina"
              width={180}
              height={180}
              className="relative w-44 h-44 rounded-full object-cover border-2 border-primary/40 glow"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tight">
          David-West Okorite <span className="block">Georgina</span>
        </h1>

        <p className="mt-4 text-xl font-semibold text-[#06b6d4] font-display">
          Frontend Developer
        </p>

        <p className="text-[#e2e1e1] mt-6 max-w-2xl mx-auto leading-relaxed">
          As a passionate frontend developer with expertise in React, TypeScript, and modern web technologies,
          I craft beautiful, performant interfaces that turn ideas into delightful user experiences.
        </p>

        <div className="mt-10">
            <Button variant="outline" size="sm" asChild className="rounded-full text-sm border-primary text-primary px-4 hover:bg-[#A78BFA] hover:text-gray-600 transition duration-500">
                <Link href="#contact">Contact Me</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
