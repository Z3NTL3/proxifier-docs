import { JSX } from "react";
import './feats.css'


type Feat<T = String> = {
    title: T
    desc: T
    icon?: T
}
const features: Array<Feat> = [
    {title: "Ergenomic", desc: "Built from scratch using native Go libraries with zero dependency, no overhead and comfortable high level API. Just focus on proxying rather than debugging.", icon: "fa-solid fa-wrench"},
    {title: "TLS", desc: `Proxifier can plug to any socket connection and wire it with TLS.`, icon: "fa-solid fa-lock"},
    {title: "Reliable", desc: `Published by professionals, for professionals.`, icon: "fa-solid fa-code"}
]

export default function Feats(): JSX.Element {
    let output = features.map((item) => (
            <div className="flex flex-col p-5 items-start min-w-[230px] max-w-[300px] min-h-[200px] gap-y-2">
                <i className={`${item.icon} text-[#4179C3] text-[26px] mb-2`}></i>
                <h3 className="font-medium mb-2">{item.title}</h3>

                <p>
                    {item.desc}
                </p>
            </div>
        )
    )

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-x-25 bg-darkest w-full min-h-[320px]">
                {output}
            </div>
        </>
    )
}