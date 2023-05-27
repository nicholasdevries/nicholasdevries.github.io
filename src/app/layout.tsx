import clsx from "clsx";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import colors from "tailwindcss/colors";
import { BannerImage } from "../components/BannerImage";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicholas DeVries",
  description: "Personal site of Nicholas DeVries",
  themeColor: [
    { color: colors.gray["50"], media: "(prefers-color-scheme: light)" },
    { color: colors.gray["900"], media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "bg-white text-black antialiased dark:bg-gray-800 dark:text-white"
        )}
      >
        <div className={"absolute inset-0 opacity-5 blur-3xl dark:opacity-10"} aria-hidden="true">
          <BannerImage className="h-full w-full object-cover transition-opacity duration-1000" />
        </div>
        <div
          className="bg-grid-light dark:bg-grid-dark absolute inset-0 h-full w-full bg-center"
          aria-hidden="true"
        />
        <main className="relative flex min-h-screen items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
