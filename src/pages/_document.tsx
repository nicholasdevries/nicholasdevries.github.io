import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white font-sans text-black antialiased dark:bg-gray-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
