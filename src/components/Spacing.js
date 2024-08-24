import { useState } from "react";
import { cssRegex } from "../utils/CONSTANTS";
import { matchRegex } from "../utils/matchRegex";

const Spacing = () => {
    const [paddingState, setPaddingState] = useState({
        paddingLeft: "20px",
        paddingTop: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
    });

    const [confirmedPaddingState, setConfirmedPaddingState] = useState({
        paddingLeft: "20px",
        paddingTop: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
    })

    const [marginState, setMarginState] = useState({
        marginLeft: "20px",
        marginTop: "20px",
        marginRight: "20px",
        marginBottom: "20px",
    });

    const [confirmedMarginState, setConfirmedMarginState] = useState({
        marginLeft: "20px",
        marginTop: "20px",
        marginRight: "20px",
        marginBottom: "20px",
    });

    const handleChange = (e, position, isPadding) => {
        if(!cssRegex.test(e.target.value)) {
            e.target.style.border = "2px solid red";
        } else {
            e.target.style.border = "2px solid green";
        }
        if(isPadding) {
            setPaddingState(paddingState => {
                return {
                    ...paddingState, 
                    [position]: e.target.value
                }
            })
        } else {
            setMarginState(marginState => {
                return {
                    ...marginState, 
                    [position]: e.target.value
                }
            })
        }
    }

    const confirmChange = (e, isPadding) => {
        if(isPadding) {
            if(matchRegex(paddingState) !== true) {
                setPaddingState(confirmedPaddingState);
            } else {
                setConfirmedPaddingState(paddingState);
                e.target.style.border = "2px solid rgb(209,213,219)";
            }
        } else {
            if(matchRegex(marginState) !== true) {
                setMarginState(confirmedMarginState);
            } else {
                setConfirmedMarginState(marginState);
                e.target.style.border = "2px solid rgb(209,213,219)";
            }

        }
    }

    return (
        <div className="relative bg-[#f8fafb] border-2 border-slate-300 rounded-md p-2 hover:bg-orange-200 ease-linear duration-100 cursor-pointer flex flex-col items-center justify-center gap-5">
            <input className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center" type="text" pattern={cssRegex} value={marginState.marginTop} onChange={(e) => handleChange(e, "marginTop", false)} onBlur={(e) => confirmChange(e, false)}/>
            
            <div className="flex items-center justify-center gap-5">
                <input className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center" type="text" pattern={cssRegex} value={marginState.marginLeft} onChange={(e) => handleChange(e, "marginLeft", false)} onBlur={(e) => confirmChange(e, false)}/>

                <div className="relative bg-[#f8fafb] border-2 border-slate-300 rounded-md p-2 flex flex-col items-center justify-center gap-5 hover:bg-lime-200 duration-100 ease-linear cursor-pointer">
                <input className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center" type="text" pattern={cssRegex} value={paddingState.paddingTop} onChange={(e) => handleChange(e, "paddingTop", true)} onBlur={(e) => confirmChange(e, true)}/>
                    <div className="flex items-center justify-center gap-5">
                        <input className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center" type="text" pattern={cssRegex} value={paddingState.paddingLeft} onChange={(e) => handleChange(e, "paddingLeft", true)} onBlur={(e) => confirmChange(e, true)}/>
                        <div className="w-48 h-10 rounded-md bg-white hover:bg-blue-200 ease-linear duration-100"></div>
                        <input className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center" type="text" pattern={cssRegex} value={paddingState.paddingRight} onChange={(e) => handleChange(e, "paddingRight", true)} onBlur={(e) => confirmChange(e, true)}/>
                    </div>
                    <input className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center" type="text" pattern={cssRegex} value={paddingState.paddingBottom} onChange={(e) => handleChange(e, "paddingBottom", true)} onBlur={(e) => confirmChange(e, true)}/>
                </div>

                <input className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center" type="text" pattern={cssRegex} value={marginState.marginRight} onChange={(e) => handleChange(e, "marginRight", false)} onBlur={(e) => confirmChange(e, false)}/>
            </div>

            <input className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center" type="text" pattern={cssRegex} value={marginState.marginBottom} onChange={(e) => handleChange(e, "marginBottom", false)} onBlur={(e) => confirmChange(e, false)}/>
        </div>
    )
}

export default Spacing;