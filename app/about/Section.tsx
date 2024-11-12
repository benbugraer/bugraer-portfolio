"use client";

import { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  heading: string;
  headingAlignment?: "right" | "left";
  children: ReactNode;
  style?: CSSProperties;
};

export default function Section({
  heading,
  headingAlignment,
  children,
  style,
}: SectionProps) {
  return (
    <section
      style={style}
      className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
      id={heading.toLowerCase().replace(/\s/g, "-")}
    >
      <h2
        className={clsx(
          "shrink-0 text-secondary md:w-32",
          headingAlignment === "right" && "md:text-right"
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
