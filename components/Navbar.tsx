"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./ui/Logo";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Product" },
  { href: "#problem", label: "Problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pilots", label: "Pilots" },
  { href: "#team", label: "Team" },
  { href: "#connect", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ease-in-out ${
        scrolled
          ? "border-b border-border/60 bg-white/20 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-6 md:px-10"
      >
        <Link href="#top" aria-label="DRSOLV home" className="rounded-md">
          <Logo height={40} />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[15px] font-medium text-fg/75 transition-colors duration-200 ease-in-out hover:text-fg"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#partner"
              className="press inline-flex items-center rounded-md bg-fg px-4 py-2.5 text-[14px] font-medium text-white hover:bg-fg/90"
            >
              Partner with us
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white/80 text-fg md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-white md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-6 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-fg/80 transition-colors hover:bg-surface hover:text-fg"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#partner"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-fg px-4 py-2 text-center text-sm font-medium text-white"
              >
                Partner with us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
