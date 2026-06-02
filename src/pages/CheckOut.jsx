
// ─── CHECKOUT PAGE ────────────────────────────────────────────────────────────
import { useState } from "react";
function Checkout({ cart, setCart, setPage }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", type: "delivery", payment: "cash" });
  const [submitted, setSubmitted] = useState(false);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(total * 0.05);

  const handleSubmit = () => {
    if (!form.name || !form.phone) return alert("Naam aur phone number zaroori hai!");
    if (form.type === "delivery" && !form.address) return alert("Delivery address dein!");
    setSubmitted(true);
    setCart([]);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-6">✅</div>
          <h2 className="text-4xl font-black text-amber-400 mb-4" style={{fontFamily:"Georgia,serif"}}>Order Ho Gaya!</h2>
          <p className="text-white/60 mb-2">Shukriya, <span className="text-white font-bold">{form.name}</span>!</p>
          <p className="text-white/50 text-sm mb-8">Aapka order confirm ho gaya hai. Jald hi tayyar hoga! 🍽️</p>
          <button onClick={() => setPage("home")} className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 transition-all">
            Home Jaaein
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-6 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-2">Order</div>
          <h1 className="text-5xl font-black" style={{fontFamily:"Georgia,serif"}}>Checkout</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form */}
          <div className="space-y-5">
            <h2 className="text-amber-400 font-bold text-sm tracking-widest uppercase border-b border-white/10 pb-2">Aapki Info</h2>

            {[["name","Naam *","text"],["phone","Phone Number *","tel"]].map(([key,label,type]) => (
              <div key={key}>
                <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">{label}</label>
                <input type={type} value={form[key]} onChange={e => setForm(p => ({...p,[key]:e.target.value}))}
                  className="w-full bg-white/5 border border-white/20 focus:border-amber-500 text-white px-4 py-3 focus:outline-none transition-colors placeholder-white/20"
                  placeholder={label} />
              </div>
            ))}

            <div>
              <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">Order Type</label>
              <div className="flex gap-2">
                {["delivery","dine-in"].map(t => (
                  <button key={t} onClick={() => setForm(p => ({...p, type: t}))}
                    className={`flex-1 py-3 font-bold text-sm transition-all ${form.type === t ? "bg-amber-500 text-black" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"}`}>
                    {t === "delivery" ? "🚗 Delivery" : "🍽️ Dine-in"}
                  </button>
                ))}
              </div>
            </div>

            {form.type === "delivery" && (
              <div>
                <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">Address *</label>
                <textarea value={form.address} onChange={e => setForm(p => ({...p,address:e.target.value}))}
                  rows={3} className="w-full bg-white/5 border border-white/20 focus:border-amber-500 text-white px-4 py-3 focus:outline-none transition-colors resize-none"
                  placeholder="Apna ghar ka pata likhein..." />
              </div>
            )}

            <div>
              <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">Payment</label>
              <div className="flex gap-2">
                {["cash","card","jazzcash"].map(p => (
                  <button key={p} onClick={() => setForm(prev => ({...prev, payment: p}))}
                    className={`flex-1 py-2 text-xs font-bold transition-all capitalize ${form.payment === p ? "bg-amber-500 text-black" : "bg-white/5 text-white/60 border border-white/10"}`}>
                    {p === "cash" ? "💵 Cash" : p === "card" ? "💳 Card" : "📱 JazzCash"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-amber-400 font-bold text-sm tracking-widest uppercase border-b border-white/10 pb-2 mb-5">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-white/70">{item.emoji} {item.name} ×{item.qty}</span>
                  <span className="text-white font-medium">Rs.{item.price * item.qty}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-3 space-y-1 text-sm mb-6">
              <div className="flex justify-between text-white/50"><span>Tax 5%</span><span>Rs.{tax}</span></div>
              <div className="flex justify-between text-amber-400 font-black text-lg"><span>Total</span><span>Rs.{total + tax}</span></div>
            </div>
            <button onClick={handleSubmit}
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-4 text-lg transition-all active:scale-95">
              Order Place Karein ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout