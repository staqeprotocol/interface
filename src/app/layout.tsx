import "@/src/app/globals.css";
import type { Metadata, Viewport } from "next";

import { Providers } from "@/src/app/providers";
import Layout from "@/src/components/Layout";

import { Baumans } from "next/font/google";
const font = Baumans({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Staqe.App",
  description: "Staqe.App",
  applicationName: "Staqe.App",
};

export const viewport: Viewport = {
  themeColor: [{ color: "#000" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} flex flex-col min-h-screen`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
