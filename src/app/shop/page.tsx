export default function ShopPage() {
  const products = [
    {
      title: "Make Jesus Cool Again T-Shirt",
      status: "Coming Soon",
      text: "Our signature ministry T-shirt is being designed to start conversations and point people to Jesus.",
    },
    {
      title: "Make Jesus Cool Again Hoodie",
      status: "Coming Soon",
      text: "A premium hoodie for outreach, events, and everyday ministry conversations.",
    },
    {
      title: "Make Jesus Cool Again Hat",
      status: "Coming Soon",
      text: "A clean ministry hat with simple black-and-gold branding.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-center uppercase tracking-[0.35em] text-[#D4AF37]">
          Support the Mission
        </p>

        <h1 className="mb-8 text-center text-5xl font-black md:text-7xl">
          SHOP
        </h1>

        <p className="mx-auto mb-16 max-w-3xl text-center text-xl leading-9 text-gray-300">
          Ministry apparel is coming soon. Every purchase will help support
          evangelism, discipleship, outreach, ministry equipment, and future
          mission trips.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-8"
            >
              <div className="mb-8 flex h-64 items-center justify-center rounded-2xl bg-black text-gray-500">
                Product Image Coming Soon
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                {product.status}
              </p>

              <h2 className="mb-4 text-2xl font-bold text-white">
                {product.title}
              </h2>

              <p className="mb-8 leading-7 text-gray-300">{product.text}</p>

              <button className="rounded-full border border-[#D4AF37] px-7 py-3 font-bold">
                Notify Me
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}