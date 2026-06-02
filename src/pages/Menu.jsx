import { useState } from "react";
import { menuData, categories } from "../data/menuData";
function Menu({ cart, setCart }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = menuData.filter(item =>
    (activeCategory === "All" || item.category === activeCategory) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const getQty = (id) => cart.find(c => c.id === id)?.qty || 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-6 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-2">Hamara</div>
          <h1 className="text-5xl font-black" style={{fontFamily:"Georgia,serif"}}>Menu</h1>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Khana talash karein..."
            className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-5 py-3 focus:outline-none focus:border-amber-500 transition-colors"
          />
          <span className="absolute right-4 top-3 text-white/30">🔍</span>
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-amber-500 text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(item => {
            const qty = getQty(item.id);
            return (
              <div key={item.id}
                className="bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all duration-300 p-5 flex flex-col">
                <div className="text-5xl mb-3 text-center">{item.emoji}</div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 ml-2 shrink-0">{item.category}</span>
                </div>
                <p className="text-white/50 text-xs mb-4 flex-1">{item.desc}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-amber-400 font-black text-xl">Rs.{item.price}</span>
                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-4 py-2 text-sm transition-all active:scale-95">
                      + Cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCart(prev => prev.map(c => c.id === item.id ? { ...c, qty: c.qty - 1 } : c).filter(c => c.qty > 0))}
                        className="w-8 h-8 bg-white/10 hover:bg-white/20 font-bold text-lg transition-all flex items-center justify-center">−</button>
                      <span className="text-amber-400 font-bold w-5 text-center">{qty}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg transition-all flex items-center justify-center">+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-white/30 py-16 text-lg">Koi item nahi mila 😔</div>
        )}
      </div>
    </div>
  );
}
export default Menu