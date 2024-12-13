import Link from "next/link";
import ContactLinks from "./contactLinks";
import { HiArrowUpRight } from "react-icons/hi2";
import { CSSProperties } from "react";

export const metadata = {
  title: "Bugra Er | Contact",
  description: "Contact Me",
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex w-full flex-col gap-6">
        <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 animated-list mb-4">
          {ContactLinks.map((link, index) => (
            <li className="transition-opacity col-span-1" key={link.label}>
              <Link
                href={link.href}
                target="blank"
                className="transition-opacity bg-tertiary no-underline w-full border rounded-lg p-4 border-primary inline-grid animate-in"
                style={{ "--index": 10 + index } as CSSProperties}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{link.icon}</span>
                  {link.label}
                  <HiArrowUpRight className="w-3 h-3 ml-auto" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
