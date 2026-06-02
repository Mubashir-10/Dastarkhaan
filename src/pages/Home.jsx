import { menuData } from "../data/menuData";
function Home({ setPage }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-bfrom-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="relative z-10">
          <div className="text-amber-400 text-sm font-bold tracking-[0.4em] uppercase mb-4">— Karachi, Since 1985 —</div>
          <h1 className="text-7xl md:text-9xl font-black mb-4 leading-none"
            style={{fontFamily:"'Georgia', serif", letterSpacing:"-2px"}}>
            <span className="text-white">DASTARKHAN</span>
          </h1>
          <p className="text-amber-300/80 text-xl mb-10 max-w-md mx-auto font-light tracking-wide">
            Authentic Desi Flavors — Har Niwala Yadgaar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPage("menu")}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 text-lg transition-all duration-200 hover:scale-105 active:scale-95"
              style={{clipPath:"polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))"}}>
              Menu Dekhein
            </button>
            <button
              onClick={() => setPage("reservation")}
              className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 font-bold px-10 py-4 text-lg transition-all duration-200"
              style={{clipPath:"polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))"}}>
              Table Reserve Karein
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-center text-amber-400 text-3xl font-bold mb-12" style={{fontFamily:"Georgia,serif"}}>
          Hamari Khasiyat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🔥", title: "Desi Taste", desc: "Pur asli masalay aur nuskhay jo decades se chal rahay hain" },
            { icon: "👨‍🍳", title: "Expert Chefs", desc: "Hamary ustadkar bawarchi 20+ saal ka tajurba rakhte hain" },
            { icon: "🕐", title: "Fresh Daily", desc: "Roz subah taza ingredients aur handmade preparations" },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 text-center hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Items */}
      <div className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-center text-amber-400 text-3xl font-bold mb-12" style={{fontFamily:"Georgia,serif"}}>
          Mashoor Khane
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {menuData.slice(0, 3).map(item => (
            <div key={item.id} className="bg-white/5 border border-white/10 p-6 hover:border-amber-500/50 transition-all group">
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
              <h3 className="font-bold text-lg text-white mb-1">{item.name}</h3>
              <p className="text-white/50 text-sm mb-3">{item.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-bold text-lg">Rs. {item.price}</span>
                <button onClick={() => setPage("menu")} className="text-xs bg-amber-500 text-black px-3 py-1 font-bold hover:bg-amber-400 transition-colors">
                  Order Karein
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default  Home;