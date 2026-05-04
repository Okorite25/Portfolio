import { Code2, Layout, Smartphone, Sparkles, Gauge } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Layout,
    title: "UI Development",
    desc: "From design to deployment, I build pixel-perfect interfaces in React and TypeScript that bring brands to life across every device.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "I craft fluid, mobile-first layouts that adapt seamlessly to every screen size, ensuring a flawless experience for every user.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "From bundle size to Core Web Vitals, I optimize web apps for blazing-fast load times and smooth, delightful interactions.",
  },
  {
    icon: Code2,
    title: "Component Libraries",
    desc: "I design and build reusable, accessible component systems that scale with your team and stay consistent across products.",
    wide: true,
  },
  {
    icon: Sparkles,
    title: "Animation & Motion",
    desc: "I craft delightful micro-interactions and smooth animations that elevate the user experience and add personality to every interface.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto text-white">
        <SectionHeading title="What I do" subtitle="My Services" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}

          {/* Wide card with image */}
          <div className="md:col-span-2 rounded-2xl bg-[#242424] border border-none p-7 flex gap-6 hover:border-primary/50 transition-colors">
            <div className="flex-1">
              <div className="w-11 h-11 rounded-lg bg-surface-elevated flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{services[3].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{services[3].desc}</p>
            </div>
            <img
              src={"/img/components.png"}
              alt="Component library visualization"
              loading="lazy"
              width={180}
              height={180}
              className="hidden sm:block w-44 h-44 rounded-xl object-cover self-center"
            />
          </div>

          <ServiceCard {...services[4]} />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc }: { icon: typeof Code2; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-[#242424] border border-none p-7 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
      <div className="w-11 h-11 rounded-lg bg-surface-elevated flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
