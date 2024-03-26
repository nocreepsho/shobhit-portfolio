"use client"; 

import Hero from "@/components/Hero";
import About from "@/components/About";
import DashedArrow from "@/components/DashedArrow";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";


export default function Home() {


  return (
    <main className="overflow-hidden">

      <Hero />
      <DashedArrow />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer>
        <div className="flex items-center justify-end pr-10  text-darker_leaf_green h-16">
          <p>© {new Date().getFullYear()} Shobhit Narayan</p>
        </div>
      </footer>

    </main>
  );
}
