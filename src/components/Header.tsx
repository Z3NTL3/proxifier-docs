import { JSX } from "react";

export default function Header(): JSX.Element {
    return (
        <>
            <header className="relative bg-darkest w-full h-[60px] flex p-2 items-center">
                {/* logo */}
                <div>
                    <img src="./img/logo.png" alt="logo" width={140} />
                </div>
                {/* end */}

                {/* links */}
                <div className="flex gap-x-2">
                    <a href="#" className="text-white font-inter">Docs</a>
            </div>
                {/* end */}
            </header>
        </>
    )
}