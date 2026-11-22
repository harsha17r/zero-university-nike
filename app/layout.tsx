import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// One font family for the whole page.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nike Pegasus 43",
  description:
    "Mobile-first product page for the Nike Pegasus 43 at 375px, with a 26-size grid. Design prototype.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light", // light mode only
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: browser extensions add attributes to <html> before React loads,
    // which causes a harmless hydration warning. This only affects the <html> element itself.
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
