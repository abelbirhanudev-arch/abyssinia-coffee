"use client";

import { useState } from "react";

export default function OrderButton({
  coffeeName,
  price,
}: {
  coffeeName: string;
  price: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <>
      <button
  onClick={() => {
    setQuantity(1);
    setIsOpen(true);
  }}
  className="mt-auto inline-block rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-stone-700 hover:shadow-lg active:scale-95"
>
  Order Now
</button>
      {isOpen && (
     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
        <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl transition-all duration-300 ease-out animate-in fade-in zoom-in-95">
            {isConfirmed ? (
              <div className="text-center">
               <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl shadow-sm">
  ✓
</div>

                <h2 className="mt-4 text-2xl font-bold text-stone-900">
                  Order Ready to Send!
                </h2>

                <p className="mt-2 text-stone-600">
                  Your order details are ready. Send them through WhatsApp to complete your order.
                </p>

               <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-5 text-left shadow-sm">
                  <p className="font-semibold text-stone-900">{coffeeName}</p>
                  <p className="mt-1 text-stone-600">
                    Quantity: {quantity}
                  </p>
                  <p className="mt-1 font-bold text-amber-700">
                    Total: {price * quantity} ETB
                  </p>
                </div>
<div className="mt-6 flex gap-3">
  <a
    href={`https://wa.me/251900000000?text=${encodeURIComponent(
      `☕ ABYSSINIA COFFEE — NEW ORDER

👤 Customer: ${name}
📞 Phone: ${phone}

☕ Item: ${coffeeName}
🔢 Quantity: ${quantity}
💰 Total: ${price * quantity} ETB

Thank you!`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 rounded-full bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg active:scale-95"
  >
    Send on WhatsApp
  </a>

  <button
    onClick={() => {
      setIsConfirmed(false);
      setIsOpen(false);
    }}
    className="flex-1 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-stone-700"
  >
    Done
  </button>
</div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-stone-900">
                  Place Your Order
                </h2>

                <div className="mt-4 rounded-xl bg-amber-50 p-4">
                  <p className="text-lg font-bold text-stone-900">
                    {coffeeName}
                  </p>
                  <p className="mt-1 text-stone-600">{price} ETB</p>
                </div>

                <p className="mt-4 text-stone-600">
                  Choose your coffee and continue your order.
                </p>

                <div className="mt-5 flex items-center justify-between rounded-xl border border-stone-200 p-3">
                  <span className="font-semibold text-stone-900">
                    Quantity
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setQuantity(Math.max(1, quantity - 1))
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-lg font-bold hover:bg-stone-200"
                    >
                      −
                    </button>

                    <span className="w-6 text-center font-bold">
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-lg font-bold text-white hover:bg-stone-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-4">
                  <span className="font-semibold text-stone-900">
                    Total
                  </span>
                  <span className="text-xl font-bold text-amber-700">
                    {price * quantity} ETB
                  </span>
                </div>

                <div className="mt-5">
                  <label className="text-sm font-semibold text-stone-900">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-600"
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-semibold text-stone-900">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+251 9XX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-600"
                  />
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-full border border-stone-300 px-5 py-2 text-sm font-semibold text-stone-700"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      if (!name.trim() || !phone.trim()) {
                        alert(
                          "Please enter your name and phone number."
                        );
                        return;
                      }

                      if (
                        !/^(\+251|09)\d{8}$/.test(
                          phone.replace(/\s/g, "")
                        )
                      ) {
                        alert(
                          "Please enter a valid Ethiopian phone number."
                        );
                        return;
                      }

                      setIsConfirmed(true);
                    }}
                    className="flex-1 rounded-full bg-amber-700 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-800"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}