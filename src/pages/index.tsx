import Image from "next/image";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 px-[10vw] py-[10vh] md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12">
      <div className="w-36 max-w-full shrink-0 overflow-hidden rounded-full bg-black/5 dark:bg-white/5 md:w-48 lg:w-56">
        <Image
          src="https://s.gravatar.com/avatar/f3f57560bd1632d2d2329b3377ef106b"
          alt="Profile photo"
          width={224}
          height={224}
          loader={({ src, width }) => {
            return `${src}?s=${width}`;
          }}
          priority
          sizes="(min-width: 1024px) 224px, (min-width: 768px) 192px, 144px"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Nicholas DeVries
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 md:text-xl lg:text-2xl">
          Staff Software Engineer at{" "}
          <a
            href="https://peak6.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline transition-colors hover:text-black dark:hover:text-white"
          >
            PEAK6
          </a>
        </p>
        <div className="mx-auto mt-8 flex w-48 flex-col space-y-4 md:mt-6 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Button
            as="a"
            href="https://www.linkedin.com/in/nicholas-devries/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            LinkedIn
          </Button>
          <Button
            as="a"
            href="https://github.com/nicholasdevries"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
