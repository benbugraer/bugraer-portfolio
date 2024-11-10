import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "100", "200"],
});

export const metadata: Metadata = {
  title: "Buğra Er | Home",
  description: "Welcome to my little universe.",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navigation />
          <div className="px-6 md:px-6 pt-16 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
