import { HomeIcon, MenuIcon, CartIcon } from "./Icons";

export default function Header() {
  return (
    <header className="bg-[#0a0a0a] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-black text-amber-400 tracking-wider">
          DASTARKHAN 🍽️
        </h1>

        {/* Desktop Nav (optional show) */}
        <nav className="hidden md:flex gap-6 text-sm text-white/60">
          <a href="#home" className="hover:text-amber-400">Home</a>
          <a href="#menu" className="hover:text-amber-400">Menu</a>
          <a href="#reservation" className="hover:text-amber-400">Table</a>
        </nav>

        {/* Right Badge */}
        <div className="text-xs text-white/40 hidden md:block">
          Authentic Desi Taste
        </div>

      </div>
    </header>
  );
}