import { Button } from '../components/Button'
import { ProfileImage } from '../components/ProfileImage'

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 px-[10vw] py-[10vh] md:flex-row md:space-x-8 md:space-y-0 lg:space-x-12">
      <div className="w-36 max-w-full shrink-0 overflow-hidden rounded-full bg-black/5 drop-shadow-2xl md:w-48 lg:w-56 dark:bg-white/5">
        <ProfileImage />
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-bold text-4xl tracking-tighter md:text-5xl lg:text-6xl">
          Nicholas DeVries
        </h1>
        <p className="text-black/60 text-lg tracking-tight md:text-xl lg:text-2xl dark:text-white/60">
          Staff Software Engineer at{' '}
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
  )
}
