'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';


const SliderCard = ({ images }) => {
    return (
        <Swiper pa pagination={true}  modules={[Pagination]} className="mySwiper">
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image width={200} height={200} className="aspect-[3/2] w-full rounded-2xl object-cover" src={image.url} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default SliderCard;