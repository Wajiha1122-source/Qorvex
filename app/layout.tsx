import type { Metadata } from "next";
import "./globals.css";
import "./experience.css";
import "./premium.css";
import "./motion.css";

export const metadata: Metadata = {
  title: "Qorvex Solutions — Engineering Digital Excellence",
  description: "Premium websites, applications, AI solutions and digital systems engineered for ambitious businesses.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
