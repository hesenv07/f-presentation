import Link from "next/link";

const Container = ({ children, title, href }) => {
    return (
        <div className="max-w-container my-8 px-2 mx-auto">
            <div className="flex justify-between ">
                <h2 className="text-lg md:text-xl font-bold">{title}</h2>
                {href && <Link className="text-main font-semibold" href={href} >
                    View All
                </Link>
                }
            </div>
            {children}
        </div>
    )
}
export default Container;