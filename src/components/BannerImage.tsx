"use client";

import Image from "next/image";
import splashImg from "../img/splash.jpg";

export const BannerImage = ({ className }: { className: string }) => (
  <Image
    src={splashImg.src}
    alt="banner"
    width={splashImg.width}
    height={splashImg.height}
    className={className}
    unoptimized
    loader={({ src }) => src}
    priority
  />
);
