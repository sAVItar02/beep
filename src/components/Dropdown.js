import { useDispatch } from "react-redux"
import { updateFunctionality, updateIfPadding, updatePositionValue } from "../utils/dropdownSlice";

const Dropdown = ({focusOut, isPadding, position}) => {
    const dispatch = useDispatch();

    const decideFunction = (type, value) => {
        focusOut();
        dispatch(updateFunctionality({type, value}));
        dispatch(updateIfPadding(isPadding));
        dispatch(updatePositionValue(position));
    }


    return (
        <div className="bg-white border-2 border-gray-300 rounded-md w-48 flex flex-col items-start justify-center [box-shadow:2px_2px_5px_rgba(0,0,0,0.2)]">
            <p className="text-xs font-semibold p-2">Suggestions</p>
            <button onClick={() => decideFunction("this", "20px")} className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Set this value to 20px</button>
            <button onClick={() => decideFunction("all", "20px")} className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Set all values to this value</button>
            <button onClick={() => decideFunction("this", "auto")} className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Set this value to auto</button>
            <button onClick={() => decideFunction("all", "auto")} className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Set all values to auto</button>
            <button onClick={() => decideFunction("this", "unset")} className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Unset this value</button>
            <button onClick={() => decideFunction("all", "unset")} className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Unset all values</button>
            <button onClick={() => focusOut()} className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Cancel</button>
        </div>
    )
}

export default Dropdown;