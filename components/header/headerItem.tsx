interface IconAndTitle{
    Icon: any,
    title:string
}
export default function HeaderItem(iconAndTitle:IconAndTitle) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-10 sm:w-20 text-black">
            <iconAndTitle.Icon className="h-8 mb-1 group-hover:text-white" />
            <p className="tracking-widest group-hover:text-white">{iconAndTitle.title}</p>
        </div>
    )
}