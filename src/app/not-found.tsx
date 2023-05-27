import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Page not found — Nicholas DeVries",
};

export default function NotFound() {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-6xl font-bold tracking-tighter">404</h1>
      <p className="text-2xl tracking-tight text-black/60 dark:text-white/60">Page not found</p>
      <div className="mt-6">
        <Button as={Link} href="/">
          Return home
        </Button>
      </div>
    </div>
  );
}
