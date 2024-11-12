import Section from "./Section";
import { CSSProperties } from "react";
import Contact from "./Contact";

export const metadata = {
  title: "Bugra Er | About",
  description:
    "I am a Frontend developer who basically just enjoys creating somethings.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-20 ">
      <div>
        <h1
          className="animate-in text-2xl font-bold tracking-tight"
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
        <Section
          heading="About My Life"
          headingAlignment="right"
          style={{ "--index": 3 } as CSSProperties}
        >
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
        </Section>
        <Section
          heading="Software"
          headingAlignment="right"
          style={{ "--index": 8 } as CSSProperties}
        >
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
        </Section>

        <Section
          heading="Contact Me"
          headingAlignment="right"
          style={{ "--index": 11 } as CSSProperties}
        >
          <Contact />
        </Section>
      </div>
    </div>
  );
}
