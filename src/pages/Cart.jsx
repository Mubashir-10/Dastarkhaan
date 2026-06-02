import { useState } from "react";
function Cart({ cart, setCart, setPage }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(total * 0.05);

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(c => c.id === id ? { ...c, qty: c.qty + delta } : c).filter(c => c.qty > 0));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-6 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-2">Aapka</div>
          <h1 className="text-5xl font-black" style={{fontFamily:"Georgia,serif"}}>Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-7xl mb-6">🛒</div>
            <p className="text-white/40 text-xl mb-6">Cart khali hai!</p>
            <button onClick={() => setPage("menu")} className="bg-amber-500 text-black font-bold px-8 py-3 hover:bg-amber-400 transition-colors">
              Menu Dekhein
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-8">
              {cart.map(item => (
                <div key={item.id} className="bg-white/5 border border-white/10 p-4 flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <span className="text-amber-400 text-sm">Rs. {item.price} each</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 bg-white/10 hover:bg-white/20 font-bold text-center transition-all">−</button>
                    <span className="text-amber-400 font-bold w-6 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, +1)} className="w-7 h-7 bg-amber-500 hover:bg-amber-400 text-black font-bold text-center transition-all">+</button>
                  </div>
                  <div className="text-right w-24">
                    <span className="font-bold">Rs. {item.price * item.qty}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 p-6 mb-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} items)</span>
                  <span>Rs. {total}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Tax (5%)</span>
                  <span>Rs. {tax}</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between text-xl font-black text-amber-400">
                  <span>Total</span>
                  <span>Rs. {total + tax}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setPage("menu")}
                className="flex-1 border border-white/20 text-white/60 hover:border-white/40 font-bold py-4 transition-all">
                ← Menu
              </button>
              <button onClick={() => setPage("checkout")}
                className="flex-2bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 transition-all flex-1">
                Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Cart;