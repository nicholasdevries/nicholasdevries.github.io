import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import splashImg from "@/img/splash.jpg";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nicholas DeVries</title>
        <meta name="description" content="Personal site of Nicholas DeVries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div className={"absolute inset-0 opacity-5 blur-3xl dark:opacity-10"} aria-hidden="true">
        <Image
          src={splashImg.src}
          alt="banner"
          width={splashImg.width}
          height={splashImg.height}
          className="h-full w-full object-cover transition-opacity duration-1000"
          unoptimized
          loader={({ src }) => src}
          priority
        />
      </div>
      <div
        className="bg-grid-light dark:bg-grid-dark absolute inset-0 h-full w-full bg-center"
        aria-hidden="true"
      />
      <main className="relative flex min-h-screen items-center justify-center">
        <Component {...pageProps} />
      </main>
    </>
  );
}
