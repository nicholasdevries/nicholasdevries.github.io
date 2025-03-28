import classnames from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clsx = (...classes: Array<ClassValue>) => twMerge(classnames(...classes))
