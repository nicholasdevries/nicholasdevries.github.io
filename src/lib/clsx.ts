import type { ClassValue } from 'clsx'
import classnames from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clsx = (...classes: Array<ClassValue>) => twMerge(classnames(...classes))
