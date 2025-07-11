'use client';
import { useEffect } from "react";
import "./landing.css";

export default function HomePage() {
  useEffect(() => {

    const elements = document.querySelectorAll<HTMLElement>("[data-animate='true']");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-down");
          } else {
            entry.target.classList.remove("animate-slide-down");
          }
        });
      },
      { rootMargin: "300px 0px 300px 0px" }
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (

    <main>
      <section id="portfolio">
        <h2 data-animate="true">Criatividade</h2>
      </section>
      <section id="press">
        <h2 data-animate="true">Inovação</h2>
      </section>
      <section id="shop">
        <h2 data-animate="true">Marketing</h2>
      </section>
      <section id="about">
        <h2 data-animate="true">Mídia</h2>
      </section>
    </main>
  );
}
