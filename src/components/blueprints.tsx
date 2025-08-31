export interface FunctionPin {
    name: string,
    pintype: "exec" | "delegate" | "boolean" | "struct" | "fstring" | "bytearray",
}

export interface FunctionProperties {
    name: string,
    className: string,
    pure: boolean,
    inPins: FunctionPin[], 
    outPins: FunctionPin[]
}

export function UFunction({ name, className, pure, inPins, outPins } : FunctionProperties) {
    return <section className="my-[32px]">
        <div className="inline-block min-w-[140px] rounded-md overflow-hidden bg-neutral-900 shadow-md shadow-black">
            <div className={`px-[12px] flex flex-row gap-x-1 ${pure ? "bg-emerald-600" : "bg-sky-600"}`}>
                <h5 className={`!my-0 text-[18px] font-bold ${pure ? "text-lime-300" : "text-blue-300"} text-shadow-md text-shadow-black`}>𝑓</h5>
                <div className="flex flex-col align-text-top">
                    <h6 className={`my-0 h-[16px] text-[12px] font-bold text-white text-shadow-md text-shadow-black/50`}>{name}</h6>
                    {typeof className !== "undefined" &&  <h6 className="!my-0 h-[24px] text-[12px] font-normal text-neutral-200 text-shadow-md text-shadow-neutral-900/50">Target is {className}</h6>}
                </div>
            </div>

            <div className="flex flex-row justify-between px-3 py-2 gap-x-6">
                <div className="flex flex-col gap-y-1.5">
                    {typeof inPins !== "undefined" && inPins.map((val) => {
                        const pinSize = val.pintype === "exec" ? 14 : 12;
                        return <div className="flex gap-x-1.5" key={`root_${val.name}`}>
                            <img src={`/img/blueprints/${val.pintype}_pin.svg`} className={`!my-0 text-amber-500`} alt='Input pin' loading="lazy" decoding="async" width={pinSize} height={pinSize} key={`pin_${val.name}`} />                            
                            <h6 className="!my-0 text-[12px] !align-text-bottom font-light text-white" key={`id_${val.name}`}>{val.name}</h6>
                        </div>
                    })}
                </div>
                <div className="flex flex-col gap-y-1.5 items-end">
                    {typeof outPins !== "undefined" && outPins.map((val) => {
                        const pinSize = val.pintype === "exec" ? 14 : 12;
                        return <div className="flex gap-x-1.5" key={`root_${val.name}`}>
                            <h6 className="!my-0 text-[12px] font-light text-white" key={`id_${val.name}`}>{val.name}</h6>
                            <img src={`/img/blueprints/${val.pintype}_pin.svg`} className="!my-0" alt="Output pin" loading="lazy" decoding="async" width={pinSize} height={pinSize} key={`pin_${val.name}`} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    </section>
}
