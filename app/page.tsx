import { Navbar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-foreground">
      <Navbar />
      <div>
        <Hero />
        <About />
        <Services />
        <Projects />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}