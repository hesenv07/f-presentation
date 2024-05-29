'use client'

import Image from "next/image";

const Banner = () => {
    return <div className="relative mt-2 max-w-fullScreen max-h-80 mx-auto md:mt-8 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
            fill
            src='/images/banner.webp'
            alt=""
            className="absolute inset-0 -z-10 h-auto w-full object-cover"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support center</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Get inspired to create something great.
                </p>
            </div>
        </div>
    </div>
}
export default Banner;