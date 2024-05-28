"use client";

import Link from "next/link";
import Image from "next/image";

 const Logo = ({ width, height, url,href='/',name="Logo"}) => {
  return (
    <Link href={href} className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <Image
        priority
        src={url}
        width={width || 170}
        height={height || 32}
        alt={name}
      />
    </Link>
  );
}

export default Logo;