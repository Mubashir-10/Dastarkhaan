import { HomeIcon, MenuIcon, CartIcon, CheckoutIcon, TableIcon } from "./Icons";

export default function Nav({ page, setPage, cartCount }) {
  const tabs = [
    { key: "home", label: "Home", Icon: HomeIcon },
    { key: "menu", label: "Menu", Icon: MenuIcon },
    { key: "cart", label: "Cart", Icon: CartIcon },
    { key: "checkout", label: "Checkout", Icon: CheckoutIcon },
    { key: "reservation", label: "Table", Icon: TableIcon },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#111]/95 backdrop-blur border-t border-white/10 z-50">
      <div className="max-w-lg mx-auto flex">

        {tabs.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 relative transition-all ${
              page === key ? "text-amber-400" : "text-white/30"
            }`}
          >
            {key === "cart" && cartCount > 0 && (
              <span className="absolute top-2 right-1/3 bg-amber-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}

            <Icon />

            <span className="text-[10px] uppercase font-bold tracking-wider">
              {label}
            </span>

            {page === key && (
              <span className="absolute top-0 w-10 h-0.5 bg-amber-500" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}