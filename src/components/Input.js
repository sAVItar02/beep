import { useState } from "react";
import { cssRegex } from "../utils/CONSTANTS";
import Dropdown from "./Dropdown";

const Input = ({value, handleChangeFunc, confirmChangeFunc, position, isPadding}) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const focusInFunc = (e) => {
        setShowDropdown(true);
    }

    const focusOutFunc = (e) => {
        setShowDropdown(false);
    }

    return (
        <div className="relative">
            <input 
            type="text" 
            pattern={cssRegex} 
            value={value} 
            onChange={(e) => handleChangeFunc(e, position, isPadding)} 
            onBlur={(e) => {
                confirmChangeFunc(e, isPadding);
                focusOutFunc();
            }}
            onFocus={(e) => focusInFunc()}
            className="w-16 outline-none rounded-md border-2 border-gray-300 p-1 bg-[#f8fafb] font-semibold text-center"/>

            <div className={`absolute z-10 top-10 left-1/2 -translate-x-1/2 ${showDropdown ? "block" : "hidden"}`}>
                <Dropdown /> 
            </div>
        </div>
    )
}

export default Input;