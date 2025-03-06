import { clsx } from '../lib/clsx'
import type React from 'react'

type ButtonProps<T extends React.ElementType> = {
  as?: T
  children?: React.ReactNode
}

export const Button = <T extends React.ElementType = 'button'>({
  as,
  ...props
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || 'button'
  return (
    <Component
      className={clsx(
        'relative inline-flex h-10 cursor-pointer flex-nowrap items-center justify-center rounded bg-gray-100/50 px-4 font-semibold text-black outline-none ring-blue-500 ring-offset-2 ring-offset-white drop-shadow transition-colors hover:bg-gray-100/75 focus-visible:ring-2 dark:bg-gray-900/50 dark:text-white dark:ring-blue-400 dark:ring-offset-gray-800 dark:hover:bg-gray-900/75',
        props.className,
      )}
      {...props}
    />
  )
}
