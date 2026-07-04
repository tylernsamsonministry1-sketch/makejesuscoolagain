"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-3 leading-tight">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37] text-2xl text-[#D4AF37]">
            ✝
          </div>

          <div>
            <span className="block text-[11px] font-black tracking-[0.28em] text-[#D4AF37]">
              MAKE JESUS
            </span>
            <span className="block text-[11px] font-black tracking-[0.28em] text-white">
              COOL AGAIN
            </span>
            <span className="block text-[9px] tracking-[0.38em] text-gray-400">
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

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/60 text-[#D4AF37] lg:hidden"
          aria-label="Open menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5 text-lg font-semibold text-gray-200">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="transition hover:text-[#D4AF37]"
              >
                {label}
              </a>
            ))}

            <a
              href="/prayer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#D4AF37] px-6 py-3 text-center font-bold text-black"
            >
              Prayer Request
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}