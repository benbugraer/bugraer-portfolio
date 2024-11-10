"use client";

import { CSSProperties } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import NavLinks from "./NavLinks";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  return (
    <header
      className="bg-tertiary lg:rounded-lg lg:w-4/12 mx-auto lg:my-6 top-0 sticky z-40 backdrop-blur-xl animate-in-reverse"
      style={{ "--index": 0 } as CSSProperties}
    >
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 shadow-2xl" />

      <div className="container flex h-16 items-center justify-center w-full">
        <nav className="flex items-center gap-5 text-center w-full justify-center">
          <ul className="flex items-center justify-center gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <NavLinks href={link.href}>{link.label}</NavLinks>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeSwitcher />
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 shadow-2xl" />
    </header>
  );
}
