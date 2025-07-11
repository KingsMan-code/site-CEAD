'use client';
import { useEffect } from "react";
import "./landing.css";

export default function HomePage() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const rings = cursor?.querySelectorAll<HTMLElement>(".ring");
    function handleMove(e: MouseEvent) {
      rings?.forEach((ring) => {
        ring.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      });
    }
    window.addEventListener("mousemove", handleMove);

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
      window.removeEventListener("mousemove", handleMove);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (

    <main className="pb-24">
      <section id="portfolio">
        <h2 data-animate="true">Criatividade</h2>
      </section>
      <section id="press">
        <h2 data-animate="true">Inovacao</h2>
      </section>
      <section id="shop">
        <h2 data-animate="true">Marketing</h2>
      </section>
      <section id="about">
        <h2 data-animate="true">Media Manager</h2>
      </section>
      <div id="cursor" className="cursor">
        <div className="ring">
          <div></div>
        </div>
        <div className="ring">
          <div></div>
        </div>

      </div>
    </main>
  );
}
