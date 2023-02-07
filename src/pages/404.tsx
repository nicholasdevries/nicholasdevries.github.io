import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found &mdash; Nicholas DeVries</title>
      </Head>
      <div className="text-center md:text-left">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>
        <p className="text-2xl text-black/60 dark:text-white/60">Page not found</p>
        <div className="mt-6">
          <Button as={Link} href="/">
            Return home
          </Button>
        </div>
      </div>
    </>
  );
}
