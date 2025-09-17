import { JSX } from "react";

export default function Intro(): JSX.Element {
    return (
        <>
            <div className="relative flex flex-col min-h-[400px] h-fit justify-start items-center bg-red-500/0 w-full">
                <div className="mt-[120px]"></div>
                <div className="border border-yellow-400/0 min-w-[400px] p-2">
                    <h1 className="font-semibold text-[48px] h-fit text-left font-inter">Proxifier</h1>
                    <p className="mt-2 max-w-[400px] text-white/70 text-[16px]" style={{lineBreak: "auto"}}>A proxy client library for Go programs with support for SOCKS4/5 and HTTP/HTTPS</p>

                    <div className="cursor-pointer mt-4">
                        <a href="#">
                            <button className="bg-[#4179C3] rounded-md text-white px-5 py-2 font-semibold">Get started</button>
                        </a>
                    </div>
                </div>

                {/* shape */}
                <div className="absolute right-64 bottom-15">
                    <img className="scale-[113%]" src="/img/planet.svg" alt="" />
                </div>
                {/* end */}
            </div>
        </>
    )
}