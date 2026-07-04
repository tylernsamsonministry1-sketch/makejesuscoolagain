export default function Navbar() {
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["What We Believe", "/beliefs"],
    ["Prayer", "/prayer"],
    ["Give", "/donate"],
    ["Shop", "/shop"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-3 leading-tight">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37] text-2xl text-[#D4AF37]">
            ✝
          </div>

          <div>
            <span className="block text-xs font-black tracking-[0.35em] text-[#D4AF37]">
              MAKE JESUS
            </span>
            <span className="block text-xs font-black tracking-[0.35em] text-white">
              COOL AGAIN
            </span>
            <span className="block text-[10px] tracking-[0.45em] text-gray-400">
              MINISTRY
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-gray-200 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-[#D4AF37]">
              {label}
            </a>
          ))}
        </div>

        <a
          href="/prayer"
          className="hidden rounded-full border border-[#D4AF37]/60 px-5 py-2 text-sm font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black md:block"
        >
          Prayer Request
        </a>
      </div>
    </nav>
  );
}