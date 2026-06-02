export const menuData = [
  { id: 1, name: "Chicken Karahi", price: 850, category: "Main Course", emoji: "🍲", desc: "Desi style karahi with fresh tomatoes & spices" },
  { id: 2, name: "Mutton Biryani", price: 650, category: "Rice", emoji: "🍛", desc: "Dum cooked mutton with basmati rice" },
  { id: 3, name: "Seekh Kabab", price: 420, category: "Starters", emoji: "🍢", desc: "Minced beef kabab on skewers" },
  { id: 4, name: "Naan", price: 50, category: "Bread", emoji: "🫓", desc: "Soft tandoor baked naan" },
  { id: 5, name: "Mango Lassi", price: 180, category: "Drinks", emoji: "🥭", desc: "Creamy mango yogurt drink" },
];
export const categories = ["All", ...new Set(menuData.map(i => i.category))];