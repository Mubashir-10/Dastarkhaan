import { useState } from "react";
function Reservation() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = ["12:00 PM","1:00 PM","2:00 PM","3:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM"];

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.date || !form.time) return alert("Tamam zaroori fields bharein!");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-6">🪑</div>
          <h2 className="text-4xl font-black text-amber-400 mb-4" style={{fontFamily:"Georgia,serif"}}>Table Book Ho Gaya!</h2>
          <div className="bg-white/5 border border-amber-500/30 p-6 text-left mb-8 space-y-2">
            <div className="flex justify-between"><span className="text-white/50">Naam:</span><span className="font-bold">{form.name}</span></div>
            <div className="flex justify-between"><span className="text-white/50">Tarikh:</span><span className="font-bold">{form.date}</span></div>
            <div className="flex justify-between"><span className="text-white/50">Waqt:</span><span className="font-bold">{form.time}</span></div>
            <div className="flex justify-between"><span className="text-white/50">Mehman:</span><span className="font-bold">{form.guests} log</span></div>
          </div>
          <button onClick={() => setSubmitted(false)} className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 transition-all">
            Naya Booking Karein
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-6 pb-24">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-2">Mesa</div>
          <h1 className="text-5xl font-black" style={{fontFamily:"Georgia,serif"}}>Table Reserve</h1>
          <p className="text-white/40 mt-3">Apna table abhi book karein</p>
        </div>

        <div className="space-y-5">
          {[["name","Aapka Naam *","text"],["phone","Phone Number *","tel"]].map(([key,label,type]) => (
            <div key={key}>
              <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">{label}</label>
              <input type={type} value={form[key]} onChange={e => setForm(p=>({...p,[key]:e.target.value}))}
                className="w-full bg-white/5 border border-white/20 focus:border-amber-500 text-white px-4 py-3 focus:outline-none transition-colors"
                placeholder={label} />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">Tarikh *</label>
              <input type="date" value={form.date} min={new Date().toISOString().split("T")[0]}
                onChange={e => setForm(p=>({...p,date:e.target.value}))}
                className="w-full bg-white/5 border border-white/20 focus:border-amber-500 text-white px-4 py-3 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">Mehman *</label>
              <select value={form.guests} onChange={e => setForm(p=>({...p,guests:e.target.value}))}
                className="w-full bg-[#111] border border-white/20 focus:border-amber-500 text-white px-4 py-3 focus:outline-none transition-colors">
                {[1,2,3,4,5,6,8,10].map(n => (
                  <option key={n} value={n}>{n} {n===1?"Mehman":"Mehman"}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider mb-3 block">Waqt Chunein *</label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map(t => (
                <button key={t} onClick={() => setForm(p=>({...p,time:t}))}
                  className={`py-2 text-xs font-bold transition-all ${form.time === t ? "bg-amber-500 text-black" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">Koi Khaas Farmaaish?</label>
            <textarea value={form.note} onChange={e => setForm(p=>({...p,note:e.target.value}))}
              rows={3} className="w-full bg-white/5 border border-white/20 focus:border-amber-500 text-white px-4 py-3 focus:outline-none transition-colors resize-none"
              placeholder="Birthday celebration, allergy, special seats..." />
          </div>

          <button onClick={handleSubmit}
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-4 text-lg transition-all active:scale-95 mt-2">
            Table Book Karein ✓
          </button>
        </div>
      </div>
    </div>
  );
}
export default Reservation;

// ─── NAV ──────────────────────────────────────────────────────────────────────
