
import {
    NewspaperIcon,
    ClipboardListIcon,
    CollectionIcon,
    UserCircleIcon
} from "@heroicons/react/outline"
import HeaderItem from "./headerItem"
export default function Header() {
    return (
        <div className="absolute bg-gray-700 top-0 w-full">
            <header className="flex flex-col sm:flex-row m-5 justify-between">
                <div className="flex cursor-pointer transform hover:scale-110">
                    <h1 className="text-6xl font-extrabold">Omega Consumer</h1>
                </div>
                <div className="flex flex-grow justify-evenly max-w-sm">
                    <HeaderItem title="게임소식" Icon={NewspaperIcon} />
                    <HeaderItem title="게임리뷰" Icon={CollectionIcon} />
                    <HeaderItem title="공지사항" Icon={ClipboardListIcon} />
                    <HeaderItem title="회원프로필" Icon={UserCircleIcon} />
                </div>
            </header>
        </div>
    )
}