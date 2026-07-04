const socials = [
  {
    name: "Instagram",
    handle: "@samson.tyler_ministries",
    link: "https://instagram.com/samson.tyler_ministries",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11.5 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "Samson & Tyler Ministry",
    link: "https://www.youtube.com/@samsontylerministry",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M23 12s0-3.5-.4-5.2c-.2-1-.9-1.7-1.8-1.9C19.2 4.5 12 4.5 12 4.5s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.9C1 8.5 1 12 1 12s0 3.5.4 5.2c.2 1 .9 1.7 1.8 1.9 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.9.4-1.7.4-5.2.4-5.2zM10 15.5v-7l6 3.5-6 3.5z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "Samson & Tyler Ministry",
    link: "https://www.tiktok.com/@samson.tyler.ministries?_r=1&_t=ZT-97iLpFNqlo6",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M16.5 2c.5 2 2 3.8 4 4.3V10c-1.4 0-2.8-.4-4-1.2V15a5.5 5.5 0 11-5.5-5.5v3A2.5 2.5 0 1013.5 15V2h3z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Samson & Tyler Ministry",
    link: "https://www.facebook.com/share/18woyhBvQX/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M22 12A10 10 0 1010.5 21.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H16l-.4 2.9h-2V22A10 10 0 0022 12z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "tylernsamsonministry1@gmail.com",
    link: "mailto:tylernsamsonministry1@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M2 5h20v14H2V5zm2 2v.2L12 13l8-5.8V7H4z"/>
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <section className="bg-[#0B0B0B] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] mb-3">
            Stay Connected
          </p>
          <h2 className="text-5xl font-black">
            Follow the Ministry
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-[#D4AF37]/20 bg-[#181818] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]"
            >
              <div className="mb-5 flex justify-center text-[#D4AF37]">
                {social.icon}
              </div>

              <h3 className="mb-2 text-xl font-bold">
                {social.name}
              </h3>

              <p
  className={`text-gray-300 ${
    social.name === "Email" ? "text-xs break-all" : "text-sm"
  }`}
>
  {social.handle}
</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}