import clsx from "clsx";
import { Inter } from "next/font/google";
import React from "react";
import colors from "tailwindcss/colors";
import { BannerImage } from "../components/BannerImage";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Nicholas DeVries</title>
        <meta name="description" content="Personal site of Nicholas DeVries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          key="theme-color-light"
          name="theme-color"
          content={colors.gray["50"]}
          media="(prefers-color-scheme: light)"
        />
        <meta
          key="theme-color-dark"
          name="theme-color"
          content={colors.gray["900"]}
          media="(prefers-color-scheme: dark)"
        />
      </head>
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
