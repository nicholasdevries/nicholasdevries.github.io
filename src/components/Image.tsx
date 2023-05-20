"use client";

import NextImage, { ImageProps } from "next/image";

export const Image = (props: Omit<ImageProps, "loader">) => (
  <NextImage {...props} loader={({ src }) => src} />
);
