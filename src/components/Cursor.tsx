"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const rings = cursor?.querySelectorAll<HTMLElement>(".ring");
    const handleMove = (e: MouseEvent) => {
      rings?.forEach((ring) => {
        ring.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div id="cursor" className="cursor">
      <div className="ring">
        <div></div>
      </div>
      <div className="ring">
        <div></div>
      </div>
    </div>
  );
}
