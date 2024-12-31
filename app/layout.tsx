import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "100", "200"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bugraer.com/"),
  title: {
    default: "Buğra Er | Frontend Developer",
    template: "%s | Buğra Er",
  },
  description:
    "Frontend Developer specializing in React, Next.js, and modern web technologies. Check out my portfolio and projects.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Web Development",
    "JavaScript",
    "TypeScript",
  ],
  creator: "Buğra Er",
  openGraph: {
    type: "website",
    locale: "tr_TR, en_US",
    url: "https://www.bugraer.com/",
    title: "Buğra Er | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Buğra Er Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "antialiased bg-primary text-primary",
          poppins.className
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <div className="px-6 md:px-6 pt-16 md:pt-20 md:pb-44 max-w-[1200px] mx-auto">
            <GridPattern
              width={67}
              height={67}
              x={-1}
              y={-1}
              strokeDasharray={"0 0"}
              className={cn(
                "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] fixed inset-0 animate-in"
              )}
            />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
