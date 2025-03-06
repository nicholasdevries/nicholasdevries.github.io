import classnames from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export const clsx = (...classes: Array<ClassValue>) => twMerge(classnames(...classes))
