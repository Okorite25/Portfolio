"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Godforfactor",
    desc: "Ecommerce website for a shoe brand",
    image: "/img/godforfactor.png",
    url: "https://godfactorbrand.com",
  },
  {
    title: "Shop.co",
    desc: "Multi-vendor ecommerce platform",
    image: "/img/shopco.png",
    url: "https://shop-co-nine-beta.vercel.app/",
  },
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio showcasing projects and skills",
    image: "/img/portfolio.png",
    url: "https://davidwestokoritegeorgina.vercel.app/",
  },
  {
    title: "MEGA.news",
    desc: "The news you need, the stories you love all in one place.",
    image: "/img/meganews.png",
    url: "https://magazine-theta-lake.vercel.app/",
  },
];

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    function calculate() {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 768) return 2;
      return 3;
    }

    function handleResize() {
      setItemsPerView(calculate());
    }

    setItemsPerView(calculate());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerView;
}

export function Projects() {
  const itemsPerView = useItemsPerView();
  const maxIndex = projects.length - itemsPerView;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Clamp current when itemsPerView changes (e.g. on resize)
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
  }, [maxIndex, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const goTo = useCallback(
    (index: number) => {
      stopAutoplay();
      setCurrent(index);
      startAutoplay();
    },
    [startAutoplay, stopAutoplay]
  );

  const goPrev = () => goTo(current <= 0 ? maxIndex : current - 1);
  const goNext = () => goTo(current >= maxIndex ? 0 : current + 1);

  // Width of each card as a percentage of the track
  const cardWidthPct = 100 / itemsPerView;
  // How far to translate: move `current` cards, each `cardWidthPct` wide
  const translatePct = current * cardWidthPct;

  return (
    <main id="projects" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="Some of my Work" />

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translatePct}%)` }}
            >
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="shrink-0 px-2"
                  style={{ width: `${cardWidthPct}%` }}
                >
                  <article className="group">
                    <div className="aspect-4/3 rounded-xl mb-4 overflow-hidden relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors" />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display font-semibold text-lg">
                          {p.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {p.desc}
                        </p>
                      </div>

                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 hover:scale-110 transition-transform"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-neutral-100 transition z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-neutral-100 transition z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-primary" : "w-2 bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}