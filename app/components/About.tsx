import { Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { SectionHeading } from "./SectionHeading";
import Link from "next/link";

export function About() {
  return (
    <div id="about" className="py-26 px-6">
      <div className="max-w-3xl mx-auto text-white">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <div className="space-y-6 text-center text-[#e2e1e1] leading-relaxed">
          <p>
            Hi there! I'm David-West Okorite Georgina, a frontend developer specializing in building responsive,
            accessible, and visually stunning web applications. With a strong foundation in React, TypeScript,
            Next.js, and Tailwind Css, I'm dedicated to turning complex problems into intuitive interfaces.
          </p>
          <p>
            I bring a blend of technical expertise, design sensibility, and a commitment to clean code on every
            project. Whether it's crafting pixel-perfect components, optimizing performance, or collaborating
            closely with designers, I'm here to help bring your product vision to life.
          </p>
          <p>
            Let's work together to build experiences your users will love. Get in touch and let's start
            shipping something great!
          </p>
        </div>

        <div className="flex justify-center mt-10" id="resume">
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="rounded-full bg-white text-black hover:bg-[#A78BFA] hover:text-gray-600 transition duration-500">
            View CV
          </Button>
        </a>

        </div>
      </div>
    </div>
  );
}
