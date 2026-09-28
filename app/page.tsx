import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen scroll-smooth bg-amber-50 text-stone-900">
      {/* Navigation */}
     <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-stone-200 bg-white/90 px-4 py-4 sm:px-10 sm:py-5 backdrop-blur sm:px-10">
<div className="flex items-center gap-2">
  <span className="text-2xl">☕</span>
  <h2 className="text-xl font-bold">Abyssinia Coffee</h2>
</div>

  <div className="flex items-center gap-3 text-xs font-medium sm:gap-5 sm:text-sm">
        <a
  href="#home"
  className="transition-colors duration-300 hover:text-amber-700"
>
  Home
</a><a
  href="#menu"
  className="transition-colors duration-300 hover:text-amber-700"
>
  Menu
</a>
      <a
  href="#about"
  className="transition-colors duration-300 hover:text-amber-700"
>
  About
</a>
       <a
  href="#contact"
className="rounded-full border border-stone-300 bg-white px-7 py-3 font-semibold text-stone-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-700 hover:text-amber-700 hover:shadow-md"
>
  Contact
</a>
        </div>
      </nav>

   {/* Hero */}
<section id="home" className="flex min-h-[80vh] items-center justify-center px-6 py-16">
  <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
    
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
        Ethiopian Coffee House
      </p>

      <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
        Abyssinia Coffee
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
        Experience the rich taste and tradition of Ethiopian coffee in a
        warm and welcoming place.
      </p>
<div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-stone-600">
  <span className="rounded-full bg-white px-4 py-2 shadow-sm">
    Freshly Roasted
  </span>
  <span className="rounded-full bg-white px-4 py-2 shadow-sm">
    Ethiopian Beans
  </span>
  <span className="rounded-full bg-white px-4 py-2 shadow-sm">
    Traditional Taste
  </span>
</div>
      <div className="mt-8 flex gap-4">
        <a
  href="#menu"
 className="rounded-full bg-amber-700 px-7 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-amber-800 hover:shadow-lg"
>
  View Our Menu
</a>

        <a
  href="#contact"
className="rounded-full border border-stone-300 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white"
>
  Contact Us
</a>
      </div>
    </div>

    <div className="overflow-hidden rounded-3xl">
      <Image
  src="/coffee.jpg"
  alt="Ethiopian coffee"
  width={600}
  height={450}
className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
/>
    </div>

  </div>
</section>
{/* Menu */}
    <section id="menu" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Our Menu
          </p>

     <h2 className="mt-3 text-center text-4xl font-bold">
  Taste Ethiopia
</h2>
<p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-stone-600">
  Discover authentic Ethiopian coffee, carefully prepared with rich flavors
  and traditional hospitality.
</p>
<div className="group relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl shadow-xl">
  <Image
    src="/menu-coffee.jpg"
    alt="Traditional Ethiopian coffee"
    width={1200}
    height={800}
    className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
  />
 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-5 pt-12 text-center text-white">
  Traditional Ethiopian Coffee
</div>
</div>

<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-3xl">☕</div>

<h3 className="text-xl font-bold">Ethiopian Coffee</h3>
              <p className="mt-2 text-stone-600">
                Freshly roasted Ethiopian coffee with a rich, traditional flavor.
              </p>
            <p className="mt-4 text-lg font-bold text-amber-700">120 ETB</p>
              <a
  href="https://wa.me/251900000000?text=Hello%2C%20I%27d%20like%20to%20order%20Ethiopian%20Coffee."
  target="_blank"
rel="noopener noreferrer"
  className="mt-auto inline-block rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-stone-700"
>
  Order Now
</a>
            </div>

           <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
           <div className="mb-4 text-3xl">☕</div>

<h3 className="text-xl font-bold">Macchiato</h3>
              <p className="mt-2 text-stone-600">
                Smooth espresso combined with warm, creamy milk.
              </p>
          <p className="mt-4 text-lg font-bold text-amber-700">150 ETB</p>
              <a
 href="https://wa.me/251900000000?text=Hello%2C%20I%27d%20like%20to%20order%20a%20Macchiato."
 target="_blank"
rel="noopener noreferrer"
  className="mt-auto inline-block rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-stone-700"
>
  Order Now
</a>
            </div>
<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
             <div className="mb-4 text-3xl">☕</div>

<h3 className="text-xl font-bold">Traditional Bunna</h3>
              <p className="mt-2 text-stone-600">
                A traditional Ethiopian coffee experience served with care.
              </p>
            <p className="mt-4 text-lg font-bold text-amber-700">180 ETB</p>
              <a
href="https://wa.me/251900000000?text=Hello%2C%20I%27d%20like%20to%20order%20Traditional%20Bunna."
target="_blank"
rel="noopener noreferrer"
  className="mt-auto inline-block rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-stone-700"
>
  Order Now
</a>
            </div>
          </div>
        </div>
      </section>
{/* Why Choose Us */}
<section className="px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
      Why Choose Us
    </p>

    <h2 className="mt-3 text-center text-4xl font-bold">
      The Ethiopian Coffee Experience
    </h2>

    <div className="mt-10 grid gap-6 sm:grid-cols-3">
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="text-4xl">☕</div>
        <h3 className="mt-4 text-xl font-bold">Authentic Coffee</h3>
        <p className="mt-3 text-stone-600">
          Enjoy the rich taste and tradition of authentic Ethiopian coffee.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="text-4xl">🌱</div>
        <h3 className="mt-4 text-xl font-bold">Quality Beans</h3>
        <p className="mt-3 text-stone-600">
          Carefully selected beans prepared to bring out their natural flavor.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="text-4xl">🤝</div>
        <h3 className="mt-4 text-xl font-bold">Warm Hospitality</h3>
        <p className="mt-3 text-stone-600">
          A welcoming place to relax, connect, and enjoy every cup.
        </p>
      </div>
    </div>
  </div>
</section>

{/* About */}
      {/* About */}
      <section id="about" className="px-6 py-20 sm:px-10">
<div className="mx-auto max-w-4xl rounded-3xl bg-stone-900 px-8 py-14 text-center text-white shadow-xl transition duration-300 hover:-translate-y-1 sm:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            More Than Just Coffee
          </h2>
<div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Abyssinia Coffee celebrates the deep history and culture of
            Ethiopian coffee. We bring together quality beans, traditional
            flavors, and a warm atmosphere where people can relax, connect,
            and enjoy every cup.
          </p>
        </div>
      </section>
{/* Call to Action */}
<section className="px-6 py-20">
  <div className="mx-auto max-w-5xl rounded-3xl bg-amber-700 px-8 py-14 text-center text-white shadow-xl">
    <div className="text-4xl">☕</div>

    <h2 className="mt-4 text-4xl font-bold">
      Your Perfect Cup Is Waiting
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-amber-100">
      Come experience the taste and tradition of Ethiopian coffee with us.
    </p>

    <a
      href="#contact"
      className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-amber-800 transition duration-300 hover:-translate-y-1 hover:bg-amber-50"
    >
      Visit Us Today
    </a>
  </div>
</section>

{/* Contact */}
      {/* Contact */}
     <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Visit Abyssinia Coffee
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-stone-600">
            Have a question or want to visit us? We would love to hear from you.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-3 text-2xl">📍</div>
<h3 className="font-bold">Location</h3>
              <p className="mt-2 text-stone-600">Addis Ababa, Ethiopia</p>
            </div>

           <div className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
             <div className="mb-3 text-2xl">📞</div>
<h3 className="font-bold">Phone</h3>
             <a
  href="tel:+251900000000"
  className="mt-2 block text-stone-600 hover:text-amber-700"
>
  +251 900 000 000
</a>
            </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-3 text-2xl">✉️</div>
<h3 className="font-bold">Email</h3>
             <a
  href="mailto:hello@abyssiniacoffee.com"
  className="mt-2 block text-stone-600 hover:text-amber-700"
>
  hello@abyssiniacoffee.com
</a>
            </div>
          </div>
           <a
            href="https://wa.me/251900000000"
            target="_blank"
            rel="noopener noreferrer"
         className="mt-10 inline-block rounded-full bg-green-600 px-8 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
     <footer className="border-t border-stone-200 bg-stone-900 px-6 py-10 text-center text-white">
  <div className="text-2xl">☕</div>

  <h3 className="mt-2 text-xl font-bold">
    Abyssinia Coffee
  </h3>

  <p className="mt-2 text-sm text-stone-400">
    Ethiopian coffee. Traditional taste. Warm hospitality.
  </p>

  <p className="mt-6 text-xs text-stone-500">
    © 2026 Abyssinia Coffee. All rights reserved.
  </p>
</footer>
    </main>
  );
}