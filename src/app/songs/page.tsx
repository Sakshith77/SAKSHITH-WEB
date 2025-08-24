"use client";
import { useState } from "react";

const songs = [
  { title: "Eega", file: "/songs/eega.mp4" },
  { title: "Tera Chehra", file: "/songs/tera-chehra.mp4" },
  { title: "Badal", file: "/songs/badal.mp4" },
  { title: "Dangal", file: "/songs/dangal.mp4" },
  { title: "Hawayein", file: "/songs/hawayein.mp4" },
  { title: "Janam Janam", file: "/songs/janam-janam.mp4" },
  { title: "Oochi", file: "/songs/oochi.mp4" },
  { title: "Padara", file: "/songs/padara.mp4" },
  { title: "PK", file: "/songs/pk.mp4" },
  { title: "Sawan", file: "/songs/sawan.mp4" },
  { title: "Shayad", file: "/songs/shayad.mp4" },
  { title: "Humdard", file: "/songs/humdard.mp4" },
  { title: "Qaafirana", file: "/songs/qaafirana.mp4" },
  { title: "Zinda", file: "/songs/zinda.mp4" },
  { title: "Khairiyat", file: "/songs/khairiyat.mp4" },
  { title: "Zaalima", file: "/songs/zaalima.mp4" },
  { title: "Chaar Kadam", file: "/songs/chaar-kadam.mp4" },
];

export default function SongsPage() {
  const [selectedSong, setSelectedSong] = useState<string | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🎵 Songs</h1>

      {/* Video player */}
      <div className="flex justify-center mb-6">
        {selectedSong ? (
          <video
            key={selectedSong} // ensures reloading when selecting new song
            src={selectedSong}
            controls
            className="w-[400px] h-[250px] border-4 border-blue-600 rounded-md"
          />
        ) : (
          <p className="text-gray-500">Select a song to play</p>
        )}
      </div>

      {/* Song list */}
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {songs.map((song, idx) => (
          <li key={idx}>
            <button
              onClick={() => setSelectedSong(song.file)}
              className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition font-semibold"
            >
              {song.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
