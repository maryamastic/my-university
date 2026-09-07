import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NSBI Business School International | Excellence in Education",
  description: "A world-class institution dedicated to shaping global leaders.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}