import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Footerq from "./components/Footerq";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (targetY, duration = 800) => {
      const startY = window.scrollY;
      const diff = targetY - startY;
      let start;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);

        window.scrollTo(0, startY + diff * percent);

        if (time < duration) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        const y = window.scrollY + target.getBoundingClientRect().top - 80;
        smoothScroll(y, 900);
      });
    });

    return () => {
      links.forEach(link => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);



  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // reset when out of view
          }
        });
      },
      { threshold: 0.023 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <CustomCursor />
      <div className="font-sans bg-gray-200 text-black ">
        
        <Navbar />

        <main className="space-y-32">
          <Hero />
          <section id="about" className="reveal">
            <About />
          </section>

          <section id="skills" className="reveal">
            <Skills />
          </section>

          <section id="projects" className="reveal">
            <Projects />
          </section>

          <section id="contact" className="reveal">
            <Contact />
          </section>

        </main>

        <Footerq/>

        <Chatbot />
      </div>

    </>

  );
}