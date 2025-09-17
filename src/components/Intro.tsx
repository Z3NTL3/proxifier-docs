import { JSX } from "react";

export default function Intro(): JSX.Element {
    return (
        <>
            <div className="relative flex flex-col min-h-[400px] h-fit justify-start items-center w-full">
                <div className="mt-[120px]"></div>
                <div className="min-w-[400px] p-2">
                    <h1 className="font-semibold text-[62px] h-fit text-left font-inter">Proxifier</h1>
                    <p className="mt-2 max-w-[400px] text-white/70 text-[18 px]" style={{lineBreak: "auto"}}>A proxy client library for Go programs with support for SOCKS4/5 and HTTP/HTTPS</p>

                    <div className="mt-4">
                        <a href="/docs/intro">
                            <button className="cursor-pointer bg-[#4179C3] rounded-md text-[16px] text-white px-5 py-2 font-medium">Get started</button>
                        </a>
                    </div>
                     {/* shape */}
                    <div className="absolute md:right-80 lg:right-[500px] bottom-15 hidden  md:block">
                        <img className="scale-[113%]" src="/img/planet.svg" alt="" />
                    </div>
                    {/* end */}
                </div>
            </div>
        </>
    )
}