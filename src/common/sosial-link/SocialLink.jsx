"use client";

import Image from "next/image";
import Link from "next/link";


const SocialLinks = ({ links }) => {
  return (
    <div className="mt-4 flex  justify-between items-center gap-[20px] md:mt-8 cursor-pointer ">
      {links.map(({ id, icon_name, name, classes, href }) => (
        <Link
          href={href}
          key={id}
          className={`py-[4px] ${classes} w-full md:py-[10px] text-sm md:text-lg  mb-5 md:mb-[40px] flex justify-center items-center rounded-[12px] px-[8px]`}
        >
          <Image
            src={`/icons/${icon_name}.svg`}
            alt={icon_name}
            width={24}
            height={24}
          />
          <span className="pl-3">{name}</span>
        </Link>
      ))}
    </div>
  );
};
export default SocialLinks