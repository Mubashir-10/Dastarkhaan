export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white/50 mt-10">
      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

        {/* Brand */}
        <div>
          <h2 className="text-amber-400 font-bold text-xl mb-2">
            DASTARKHAN
          </h2>
          <p className="text-sm">
            Authentic desi flavors since 1985 🍛
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-bold mb-2">Quick Links</h3>
          <p className="hover:text-amber-400 cursor-pointer">Home</p>
          <p className="hover:text-amber-400 cursor-pointer">Menu</p>
          <p className="hover:text-amber-400 cursor-pointer">Reservation</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-2">Contact</h3>
          <p>📍 Karachi, Pakistan</p>
          <p>📞 03XX-XXXXXXX</p>
        </div>

      </div>

      <div className="text-center py-4 border-t border-white/10 text-xs">
        © 2026 Dastarkhan Restaurant. All rights reserved.
      </div>
    </footer>
  );
}