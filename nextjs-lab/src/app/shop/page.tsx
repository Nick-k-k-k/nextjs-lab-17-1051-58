'use client';
import { useCart } from "@/lib/cart-context";

const items = [
  { id: 1, name: "Keyboard", price: 120 },
  { id: 2, name: "Mouse", price: 80 },
  { id: 3, name: "Monitor", price: 300 },
];

export default function Shop() {
  const { addItem } = useCart();
  return (
    <div className="p-10 grid grid-cols-3 gap-6 max-w-5xl mx-auto">
      {items.map(item => (
        <div key={item.id} className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p>${item.price}</p>
          <button onClick={() => addItem(item)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}