'use client'

import NextImage from 'next/image'
import type { ImageProps } from 'next/image'

export const Image = (props: Omit<ImageProps, 'loader'>) => (
  <NextImage {...props} loader={({ src }) => src} />
)
