"use client"
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "../components/ui/button";

const categories = ["All", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind", "HTML", "CSS"] as const;
type Category = typeof categories[number];

const projects: {
  title: string;
  desc: string;
  category: Exclude<Category, "All">;
  image: string;
  url: string;
}[] = [
  {
    title: "Godforfactor",
    desc: "Ecommerce website for a shoe brand",
    category: "React",
    image: "/img/godforfactor.png",
    url: "https://godfactorbrand.com"
  },
  
  {
    title: "Shop.co",
    desc: "Multi-vendor ecommerce platform",
    category: "Next.js",
    image: "/img/shopco.png",
    url: "https://shop-co-nine-beta.vercel.app/"
  },
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio showcasing projects and skills",
    category: "Tailwind",
    image: "/img/portfolio.png",
    url:"https://davidwestokoritegeorgina.vercel.app/"
  },
];

export function Projects() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main id="projects" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="Some of my Work" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition-all ${
                active === cat
                  ? "bg-surface-elevated border-primary/50 text-foreground"
                  : "bg-white border-none text-black hover:bg-[#A78BFA] hover:text-gray-600 transition duration-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <article key={`${p.title}-${i}`} className="group">
              <div className="aspect-4/3 rounded-xl mb-4 overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                </div>
                <a href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Button variant="outline" className="rounded-full text-lg border-primary text-primary p-4 px-8 hover:bg-[#A78BFA] hover:text-gray-600 transition duration-500">View All</Button>
        </div>
      </div>
    </main>
  );
}