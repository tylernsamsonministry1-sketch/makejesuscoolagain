import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Make Jesus Cool Again Ministry",
  description:
    "Proclaiming Christ, making disciples, and calling people back to the true Jesus revealed in Scripture.",
  icons: {
    icon: "/favicon.ico",
  },
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