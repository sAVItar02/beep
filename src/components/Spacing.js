import { useState } from "react";
import { cssRegex } from "../utils/CONSTANTS";
import { matchRegex } from "../utils/matchRegex";
import Input from "./Input";

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
            <Input value={marginState.marginTop} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"marginTop"} isPadding={false}/>
            
            <div className="relative flex items-center justify-center gap-5">
                <Input value={marginState.marginLeft} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"marginLeft"} isPadding={false}/>
                

                <div className="relative bg-[#f8fafb] border-2 border-slate-300 rounded-md p-2 flex flex-col items-center justify-center gap-5 hover:bg-lime-200 duration-100 ease-linear cursor-pointer">
                    <span className="absolute top-2 left-2 text-sm font-semibold">Paddings</span>

                    <Input value={paddingState.paddingTop} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"paddingTop"} isPadding={true}/>

                    <div className="flex items-center justify-center gap-5">
                        
                        <Input value={paddingState.paddingLeft} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"paddingLeft"} isPadding={true}/>

                        <div className="w-48 h-10 rounded-md bg-white hover:bg-blue-200 ease-linear duration-100"></div>

                        <Input value={paddingState.paddingRight} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"paddingRight"} isPadding={true}/>
                    </div>
                    
                    <Input value={paddingState.paddingBottom} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"paddingBottom"} isPadding={true}/>
                </div>

                <Input value={marginState.marginRight} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"marginRight"} isPadding={false}/>
                
            </div>

            <Input value={marginState.marginBottom} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"marginBottom"} isPadding={false}/>
        </div>
    )
}

export default Spacing;