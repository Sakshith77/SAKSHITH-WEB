import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />
      <Navbar />

      {/* Profile */}
      <div className="flex justify-center my-8">
        <Image
          src="https://sakshith77.github.io/web/profile.jpg"
          alt="Sakshith Profile"
          width={150}
          height={150}
          className="rounded-full shadow-lg object-cover"
        />
      </div>

      {/* Main Content */}
      <section className="text-center px-4 py-12">
        <h2 className="text-3xl font-serif text-purple-800 mb-4">
          "Every great website starts with one bold idea."
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Let your curiosity guide you, and your passion shape the pixels.
        </p>
      </section>

      <Footer />
    </>
  );
}
