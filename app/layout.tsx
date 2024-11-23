import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "100", "200"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bugraer.com"),
  title: {
    default: "Buğra Er - Frontend Developer",
    template: "%s | Buğra Er",
  },
  openGraph: {
    title: "Buğra Er - Frontend Developer",
    type: "website",
    url: "https://bugraer.com",
  },
  description: "Buğra Er - Frontend Developer portfolio website.",
  keywords: [
    "Buğra Er",
    "bugraer",
    "Frontend Developer",
    "Web Developer",
    "NextJS",
    "React",
    "TypeScript",
    "TailwindCSS",
  ],
  robots: {
    index: true,
    follow: true,
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
          <div className="px-6 md:px-6 pt-16 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
