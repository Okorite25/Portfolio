"use client"
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "../components/ui/button";

const categories = ["All", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind"] as const;
type Category = typeof categories[number];

const projects: { title: string; desc: string; category: Exclude<Category, "All">; gradient: string }[] = [
  { title: "FinFlow Dashboard", desc: "React · TypeScript · Recharts", category: "React", gradient: "from-blue-500 to-cyan-400" },
  { title: "Lumen Marketing Site", desc: "JavaScript · Framer Motion", category: "JavaScript", gradient: "from-purple-500 to-pink-400" },
  { title: "Devlog Platform", desc: "Next.js · MDX · Tailwind", category: "Next.js", gradient: "from-emerald-500 to-teal-400" },
  { title: "Type-safe API Client", desc: "TypeScript · Zod · tRPC", category: "TypeScript", gradient: "from-amber-500 to-orange-400" },
  { title: "Component Library", desc: "Tailwind · Radix · Storybook", category: "Tailwind", gradient: "from-sky-500 to-indigo-400" },
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
              <div className={`aspect-4/3 rounded-xl bg-linear-to-br ${p.gradient} mb-4 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                </div>
                <button className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                  <ArrowUpRight size={16} />
                </button>
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