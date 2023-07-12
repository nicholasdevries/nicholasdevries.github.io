import classnames, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const clsx = (...classes: ClassValue[]) => twMerge(classnames(...classes));
