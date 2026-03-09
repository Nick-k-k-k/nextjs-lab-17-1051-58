'use client';
import { useCart } from "@/lib/cart-context";

export default function CartSummary() {
  const { items, totalPrice } = useCart();

  return (
    <div className="flex items-center gap-3">
      {/* Visual Indicator */}
      <div className="flex items-center border-2 border-white bg-black group px-2 py-1 transition-all hover:bg-white">
        <span className="text-[10px] font-black text-white group-hover:text-black mr-2">
          MARKET_TOTAL:
        </span>
        <span className="text-sm font-black text-accent group-hover:text-black">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      {/* Item Count Badge */}
      <div className="bg-accent px-3 py-1 neo-border shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] border-white border-2">
        <span className="text-xs font-black text-white">
          [{items.length.toString().padStart(2, '0')}]
        </span>
      </div>
    </div>
  );
}