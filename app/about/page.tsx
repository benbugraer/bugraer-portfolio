import type { Metadata } from "next";
import { CSSProperties } from "react";
import Contact from "./Contact";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bugraer.com/about"),
  title: {
    default: "About",
    template: "%s | Buğra Er",
  },
  openGraph: {
    title: "Buğra Er - About",
    type: "website",
    url: "https://www.bugraer.com/about",
  },
  description:
    "Learn about Buğra Er, a self-taught Frontend Developer passionate about building web applications with NextJS, React, and TypeScript. Discover my journey, skills, and how to get in touch.",
  keywords: [
    "Buğra Er",
    "bugraer",
    "Frontend Developer",
    "Web Developer",
    "NextJS",
    "React",
    "TypeScript",
    "TailwindCSS",
    "About",
    "Contact",
    "Software",
    "My Life",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/about",
  },
};
export default function About() {
  return (
    <div className="flex flex-col gap-10 overflow-hidden max-w-4xl justify-center mx-auto">
      <div>
        <h1
          className="animate-in text-2xl mb-4 font-bold tracking-tight"
          style={{ "--index": 1 } as CSSProperties}
        >
          About Me
        </h1>
        <p
          className="text-secondary animate-in"
          style={{ "--index": 2 } as CSSProperties}
        >
          Just little about my life.
        </p>
      </div>
      <div className="flex flex-col gap-16 animate-in md:gap-24">
        <section
          className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
          id="about-my-life"
        >
          <h2
            className="shrink-0 text-secondary md:w-32 md:text-right animate-in"
            style={{ "--index": 3 } as CSSProperties}
          >
            About My Life
          </h2>
          <div
            className="flex flex-col gap-6 animate-in"
            style={{ "--index": 4 } as CSSProperties}
          >
            <h2
              className="animate-in"
              style={{ "--index": 5 } as CSSProperties}
            >
              Hello World, I&apos;m Buğra Er!
            </h2>
            <p
              className="text-sm animate-in"
              style={{ "--index": 6 } as CSSProperties}
            >
              Hi there!!! I&apos;m Buğra, I&apos;m 23 years old and I live in
              Turkey, I graduated from Balıkesir University Business
              Administration Department. I started learning software in 2023 and
              I developed myself completely on my own.
            </p>
            <p
              className="text-sm animate-in"
              style={{ "--index": 7 } as CSSProperties}
            >
              I&apos;m usually at my desk, but when I&apos;m not, you can find
              me at the gym, jogging around town, or having a coffee at a local
              shop!
            </p>
          </div>
        </section>

        <section
          className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
          id="software"
        >
          <h2
            className="shrink-0 text-secondary md:w-32 md:text-right animate-in"
            style={{ "--index": 8 } as CSSProperties}
          >
            Software
          </h2>
          <div
            className="flex flex-col gap-6 animate-in"
            style={{ "--index": 9 } as CSSProperties}
          >
            <p
              className="text-sm animate-in"
              style={{ "--index": 10 } as CSSProperties}
            >
              In 2023, I started this journey by learning HTML, then I learned
              CSS, Scss and Boostrap 5, and right after that I started learning
              JavaScript and right after that I learned React. Nowadays, I
              generally build things using NextJS, TypeScript, Express,
              Tailwind.
            </p>
          </div>
        </section>

        <section
          className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
          id="contact-me"
        >
          <h2
            className="shrink-0 text-secondary md:w-32 md:text-right animate-in"
            style={{ "--index": 11 } as CSSProperties}
          >
            Contact Me
          </h2>
          <Contact />
        </section>
      </div>
    </div>
  );
}
