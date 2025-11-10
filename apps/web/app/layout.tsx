import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monorepo Web App",
  description: "Next.js app in monorepo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
