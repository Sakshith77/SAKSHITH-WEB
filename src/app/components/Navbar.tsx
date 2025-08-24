"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#000428] to-[#004e92]">
      <ul className="flex justify-center flex-wrap list-none p-3">
        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded">
          <Link href="/">Home 🏡</Link>
        </li>
        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded">
          <Link href="/songs">Music 🎶</Link>
        </li>
        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded">
          <Link href="/mythology">Mythology 📜</Link>
        </li>
        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded">
          <Link href="/philosophy">Philosophy 🧠</Link>
        </li>
        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded">
          <a href="https://sakshith77.netlify.app/" target="_blank">
            Gallery 🖼️
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded">
          <Link href="/contact">Contact 📩</Link>
        </li>
      </ul>
    </nav>
  );
}
