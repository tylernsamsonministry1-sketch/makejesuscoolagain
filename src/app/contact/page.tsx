export default function ContactPage() {
  const socials = [
    ["Instagram", "@samson.tyler_ministries"],
    ["YouTube", "Samson & Tyler Ministry"],
    ["TikTok", "Samson & Tyler Ministry"],
    ["Facebook", "Samson & Tyler Ministry"],
    ["Podcast", "Coming Soon"],
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-center uppercase tracking-[0.35em] text-[#D4AF37]">
          Contact
        </p>

        <h1 className="mb-8 text-center text-5xl font-black md:text-7xl">
          GET IN TOUCH
        </h1>

        <p className="mx-auto mb-16 max-w-3xl text-center text-xl leading-9 text-gray-300">
          Reach out for prayer follow-up, speaking requests, ministry
          inquiries, collaborations, or general questions.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-10">
            <h2 className="mb-6 text-3xl font-bold text-[#D4AF37]">
              Ministry Contact
            </h2>

            <p className="mb-8 text-lg text-gray-300">
              Email: tylernsamsonministry1@gmail.com
            </p>

            <div className="space-y-5">
              {socials.map(([platform, value]) => (
                <div key={platform} className="border-b border-white/10 pb-4">
                  <p className="font-bold text-[#D4AF37]">{platform}</p>
                  <p className="text-gray-300">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            action="https://formspree.io/f/xgojrgnl"
            method="POST"
            className="space-y-6 rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-10"
          >
            <input
              name="name"
              type="text"
              className="w-full rounded-xl border border-gray-700 bg-black p-4"
              placeholder="Your Name"
              required
            />

            <input
              name="email"
              type="email"
              className="w-full rounded-xl border border-gray-700 bg-black p-4"
              placeholder="Your Email"
              required
            />

            <input
              name="subject"
              type="text"
              className="w-full rounded-xl border border-gray-700 bg-black p-4"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              className="w-full rounded-xl border border-gray-700 bg-black p-4"
              rows={7}
              placeholder="Your Message"
              required
            />

            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />

            <button
              type="submit"
              className="rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}