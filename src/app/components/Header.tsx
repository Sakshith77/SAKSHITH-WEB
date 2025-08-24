"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Header() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Sakshith's Knowledge Hub",
        "Explore Music & Mythology",
        "Curated Weekly Wisdom",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header className="bg-gradient-to-r from-purple-700 to-blue-500 text-white text-center py-12">
      <h1 className="text-3xl font-bold font-serif inline-block border-r-2 pr-2 animate-pulse">
        <span ref={el}></span>
      </h1>
    </header>
  );
}
