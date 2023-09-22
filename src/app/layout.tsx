import "../tailwind.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import colors from "tailwindcss/colors";
import { clsx } from "../lib/clsx";
import styles from "./layout.module.css";

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
          "bg-white text-black antialiased dark:bg-gray-800 dark:text-white",
        )}
      >
        <div className="absolute inset-0">
          <div className={clsx(styles.glow, "absolute inset-0")} />
          <div className={clsx(styles.pattern, "absolute inset-0")} />
        </div>
        <main className="relative flex min-h-screen items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
