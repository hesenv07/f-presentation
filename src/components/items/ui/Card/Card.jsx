import Link from "next/link";

import Slider from "../Slider/SliderCard";

const Card = ({ data }) => {

    return (
        <li key={data.id}>
            <Slider images={data?.images}/>
            <Link href='/' className="text-base font-semibold leading-2 tracking-tight line-clamp-2 text-gray-900">{data.name}</Link>
            <p className="text-sm leading-7 text-main font-semibold">{data.author}</p>
            <ul role="list" className="mt-4 flex gap-x-2">
                <li>
                    <div className="text-gray-400 text-xs hover:text-gray-500">
                        <span>{data.likes} likes</span>
                    </div>
                </li>
                <li>
                    <div className="text-gray-400 text-xs hover:text-gray-500">
                        <span>{data.view} viewa</span>
                    </div>
                </li>
            </ul>
        </li>
    )
}
export default Card;