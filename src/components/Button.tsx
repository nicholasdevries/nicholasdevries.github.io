import React from "react";
import { clsx } from "../lib/clsx";

type ButtonProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
};

export const Button = <T extends React.ElementType = "button">({
  as,
  ...props
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || "button";
  return (
    <Component
      className={clsx(
        "relative inline-flex h-10 cursor-pointer flex-nowrap items-center justify-center rounded bg-black/5 px-4 font-semibold text-black outline-none ring-blue-500 ring-offset-2 ring-offset-white transition-colors hover:bg-black/10 focus-visible:ring-2 dark:bg-white/5 dark:text-white dark:ring-blue-400 dark:ring-offset-gray-800 dark:hover:bg-white/10",
        props.className,
      )}
      {...props}
    />
  );
};
