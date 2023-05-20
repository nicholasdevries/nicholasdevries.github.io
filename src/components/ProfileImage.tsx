"use client";

import Image from "next/image";

export const ProfileImage = ({ className }: { className?: string }) => (
  <Image
    className={className}
    src="https://s.gravatar.com/avatar/f3f57560bd1632d2d2329b3377ef106b"
    alt="Profile photo"
    width={224}
    height={224}
    loader={({ src, width }) => {
      return `${src}?s=${width}`;
    }}
    priority
    sizes="(min-width: 1024px) 224px, (min-width: 768px) 192px, 144px"
  />
);
