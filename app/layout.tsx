import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Nexora Business School International | Excellence in Education",
  description: "A world-class institution dedicated to shaping global leaders.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}