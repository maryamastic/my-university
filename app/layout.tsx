import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "Global University | Excellence in Education",
  description: "A world-class institution dedicated to shaping global leaders through academic excellence and innovation.",
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
 