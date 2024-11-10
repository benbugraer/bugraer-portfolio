import Image from "next/image";
import profile from "@/public/profile-photo.jpg";
import QuickLinks from "@/components/QuickLinks";
import { CSSProperties } from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1
            className="animate-in text-xl font-bold uppercase tracking-tight text-primary"
            style={{ "--index": 0 } as CSSProperties}
          >
            Bugra Er
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as CSSProperties}
          >
            I write code and i loved so welcome my spaces.
          </p>
        </div>
        <div className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center">
          <Image
            src={profile}
            width={140}
            height={140}
            alt="avatar"
            className="rounded-full bg-secondary border border-primary animate-in"
            style={{ "--index": 2 } as CSSProperties}
          />
          <QuickLinks />
        </div>
        <p
          className="max-w-xl animate-in text-primary text-[1rem] font-light"
          style={{ "--index": 3 } as CSSProperties}
        >
          Hi, I&apos;m Bugra, I&apos;m 22 years old and I&apos;ve been learning
          coding since June 2023 and now I&apos;m actively working on React,
          Javascript, Tailwind, Next JS, Figma and Framer . Now I am actively
          learning Redux & TypeScript.
        </p>
      </div>
    </div>
  );
}
