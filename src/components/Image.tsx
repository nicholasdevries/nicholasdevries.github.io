'use client'

import type { ImageProps } from 'next/image'
import NextImage from 'next/image'

export const Image = (props: Omit<ImageProps, 'loader'>) => (
  <NextImage {...props} loader={({ src }) => src} />
)
