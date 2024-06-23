'use client'

import { useState } from "react";

import Image from "next/image";

import { categories } from "./conts";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="mt-2  md:mt-8 max-w-fullScreen md:px-8 px-3 mx-auto overflow-x-scroll hide-scrollbar">
      <div className="flex gap-x-3 w-full">
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setSelectedCategory(item.id)}
              className={`min-w-fit ${selectedCategory === item.id ? "bg-black text-white" : "bg-gray-300"}
                flex flex-row gap-2 items-center  cursor-pointer font-semibold justify-center  py-1 px-2  md:py-2 md:px-4 rounded-3xl h-15 overflow-hidden`}
            >
              <Image src={`/icons/category.svg`} alt="" width={25} height={25} />
              <span className="text-xs md:text-sm whitespace-nowrap">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Category;