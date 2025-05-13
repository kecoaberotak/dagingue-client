import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dagingue | Beef Slice Bogor",
  description: "Menjual beef slice dengan berbagai varian bumbu, seperti bulgogi, bbq, lada hitam, dan teriyaki.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} "bg-white text-gray-900 antialiased"`}>{children}</body>
    </html>
  );
}
