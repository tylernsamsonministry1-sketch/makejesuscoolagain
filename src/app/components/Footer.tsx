export default function Footer() {
  const quickLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["What We Believe", "/beliefs"],
    ["Prayer", "/prayer"],
    ["Give", "/donate"],
    ["Shop", "/shop"],
    ["Contact", "/contact"],
  ];

  const socialLinks = [
    ["Instagram", "https://instagram.com/samson.tyler_ministries"],
    ["YouTube", "https://youtube.com/@samsontylerministry?si=luXiLElh0U2BtjJr"],
    ["TikTok", "https://www.tiktok.com/@samson.tyler.ministries?_r=1&_t=ZT-97iLpFNqlo6"],
    ["Facebook", "https://www.facebook.com/share/18woyhBvQX/?mibextid=wwXIfr"],
  ];

  return (
    <footer className="border-t border-[#D4AF37]/20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37] text-4xl text-[#D4AF37]">
              ✝
            </div>

            <h2 className="text-4xl font-black leading-none">
              <span className="text-[#D4AF37]">MAKE JESUS</span>
              <br />
              COOL AGAIN
            </h2>

            <p className="mt-2 uppercase tracking-[0.35em] text-[#D4AF37]">
              Ministry
            </p>

            <p className="mt-6 leading-7 text-gray-300">
              Proclaiming Christ. Making disciples. Calling people back to the
              true Jesus revealed in Scripture.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold uppercase text-[#D4AF37]">
              Quick Links
            </h3>

            <div className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-gray-300 transition hover:translate-x-1 hover:text-[#D4AF37]"
                >
                  › {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold uppercase text-[#D4AF37]">
              Connect With Us
            </h3>

            <div className="space-y-3">
              {socialLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-gray-300 transition hover:translate-x-1 hover:text-[#D4AF37]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold uppercase text-[#D4AF37]">
              Contact
            </h3>

            <a
              href="mailto:tylernsamsonministry1@gmail.com"
              className="block break-words text-gray-300 transition hover:text-[#D4AF37]"
            >
              tylernsamsonministry1@gmail.com
            </a>

            <p className="mt-6 leading-7 text-gray-400">
              We&apos;d love to hear from you. Reach out for prayer requests,
              ministry partnerships, speaking engagements, or any questions.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xl italic text-[#D4AF37]">
            &quot;I am the way, and the truth, and the life.&quot;
          </p>

          <p className="mt-2 text-gray-500">John 14:6</p>

          <p className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Make Jesus Cool Again Ministry. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}