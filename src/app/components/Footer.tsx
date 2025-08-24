export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-gray-300 text-center py-8 mt-10">
      <h3 className="text-lg mb-2">Contact Us 📩</h3>
      <p>
        Email:{" "}
        <a href="mailto:support@sakshith.com" className="text-cyan-400 hover:text-yellow-300">
          support@sakshith.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href="tel:+919000000000" className="text-cyan-400 hover:text-yellow-300">
          +91 90000 00000
        </a>
      </p>

      <div className="mt-4 space-x-4">
        <a href="https://facebook.com" className="hover:text-yellow-300">Facebook</a>|
        <a href="https://twitter.com" className="hover:text-yellow-300">Twitter</a>|
        <a href="https://instagram.com" className="hover:text-yellow-300">Instagram</a>
      </div>

      <hr className="my-4 border-gray-600" />
      <p className="text-sm">© 2025 Sakshith.com | Built with 💙 by Sakshith</p>
    </footer>
  );
}
