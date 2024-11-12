import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ReactNode } from "react";

interface NavLinksProps {
  children: ReactNode;
  href: string;
}

export default function NavLinks({ children, href }: NavLinksProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;
  return (
    <>
      <Link
        className={clsx(
          "px-4 py-2 rounded-md text-xs hover:text-primary font-normal transition ease-linear duration-100",
          active
            ? "bg-primary text-primary  border border-tertiary"
            : "text-secondary"
        )}
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
