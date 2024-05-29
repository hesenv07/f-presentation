
const List =({children})=>{
    return (
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {children}
        </ul>
    )
}

export default List;