import Image from "next/image";
import profile from "@/public/profile-photo.jpg";
import QuickLinks from "@/components/QuickLinks";
import { CSSProperties } from "react";
import Link from "next/link";
import TechStack from "@/components/TechStack";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <GridPattern
        width={67}
        height={67}
        x={-1}
        y={-1}
        strokeDasharray={"0 0"}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] fixed inset-0"
        )}
      />
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
          Hi, I&apos;m Buğra I started my software journey in 2023 by leaving
          everything aside, I&apos;m enjoying this journey very much, and
          that&apos;s it for now, you know what you need to do{" "}
          <Link href="/about" className="underline">
            for more information
          </Link>
          .
        </p>
        <TechStack />
      </div>
    </div>
  );
}
