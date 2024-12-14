import { CSSProperties } from "react";
import Nextjs from "@/public/icons/NextIcon";
import TypeScript from "@/public/icons/TypeScriptIcon";
import JavaScript from "@/public/icons/JavaScriptIcon";
import React from "@/public/icons/ReactIcon";
import TailwindCSS from "@/public/icons/TailwindIcon";

const technologies = [
  { name: "NextJS", icon: <Nextjs /> },
  { name: "TypeScript", icon: <TypeScript /> },
  { name: "JavaScript", icon: <JavaScript /> },
  { name: "React", icon: <React /> },
  { name: "TailwindCSS", icon: <TailwindCSS /> },
];

export default function TechStack() {
  return (
    <div className="flex flex-col items-center justify-center my-8 lg:my-0 lg:mt-16 rounded-xl text-center">
      <h2
        className="pb-8 uppercase text-lg text-secondary animate-in"
        style={{ "--index": 4 } as CSSProperties}
      >
        I love to work & build with
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="flex flex-col items-center animate-in"
            style={{ "--index": 5 + index } as CSSProperties}
          >
            <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="text-4xl">{tech.icon}</span>
            </div>
            <span className="text-sm text-secondary">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
