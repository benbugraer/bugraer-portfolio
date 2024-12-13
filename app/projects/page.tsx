import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bugraer.com/projects"),
  title: {
    default: "Projects",
    template: "%s | Buğra Er",
  },
  openGraph: {
    title: "Projects",
    type: "website",
    url: "https://www.bugraer.com/projects",
  },
  description:
    "Explore my diverse portfolio of web development projects showcasing expertise in React, NextJS, TypeScript, and modern frontend technologies. View live demos and source code of my professional and personal work.",
  keywords: [
    "Buğra Er",
    "bugraer",
    "Frontend Developer",
    "Web Developer",
    "NextJS",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Projects",
    "Contact",
    "Software",
    "My Life",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p>
        My whole projects will be here. I will share my projects with you. Very
        soon.
      </p>
    </div>
  );
}
