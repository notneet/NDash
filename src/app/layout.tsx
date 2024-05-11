import { fontMono } from "@/utils/font";
import { siteConfig } from "@/utils/site";
import cx from "classnames";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers/providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(fontMono.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
