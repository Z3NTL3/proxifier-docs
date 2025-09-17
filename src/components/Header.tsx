import { JSX } from "react";

interface HeaderProps {
    githubLink: string
}

export default function Header(props: HeaderProps): JSX.Element {
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
                <div className="items-center gap-x-[40px] ml-40 hidden md:flex">
                    <a href="/docs/intro" className="text-[15px] font-semibold text-white/80 hover:text-white font-inter">Docs</a>
                    <a href="https://github.com/z3ntl3" className="text-[15px] font-semibold text-white/80 hover:text-white font-inter">Author</a>
                </div>
                {/* end */}

                {/* github btn */}
                <div className="flex grow justify-end items-center mr-2">
                    <a href={props.githubLink}>
                        <i className="text-[24px] fa-brands fa-github  hover:text-blue-400"></i>
                    </a>
                </div>
                {/* end */}
            </header>
        </>
    )
}