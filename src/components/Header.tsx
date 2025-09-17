import { JSX } from "react";

export default function Header(): JSX.Element {
    return (
        <>
            <header className="relative bg-darkest w-full h-[70px] flex p-2 items-center">
                {/* logo */}
                <div className="flex items-center">
                    <img src="./img/logo.png" alt="logo" width={35} />
                    <div className="self-end">
                     <h1 style={{
                        fontWeight: 800,
                        fontSize: 28,
                        margin: 0,
                        textAlign: "left"
                     }}>roxifier</h1>
                    </div>
                </div>
                {/* end */}

                {/* links */}
                <div className="flex items-center gap-x-[40px] ml-40">
                    <a href="#" className="text-[15px] font-semibold text-white/80 hover:text-white font-inter">Docs</a>
                    <a href="#" className="text-[15px] font-semibold text-white/80 hover:text-white font-inter">Author</a>
                </div>
                {/* end */}

                {/* github btn */}
                <div className="flex grow justify-end items-center mr-2">
                    <a href="#">
                        <i className="text-[24px] fa-brands fa-github  hover:text-blue-400"></i>
                    </a>
                </div>
                {/* end */}
            </header>
        </>
    )
}