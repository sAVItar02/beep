const Dropdown = () => {
    return (
        <div className="bg-white border-2 border-gray-300 rounded-md w-64 flex flex-col items-start justify-center [box-shadow:2px_2px_5px_rgba(0,0,0,0.2)]">
            <p className="text-xs font-semibold p-2">Suggestions</p>
            <button className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Set this value to 20px</button>
            <button className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Set all values to this value</button>
            <button className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Set this value to auto</button>
            <button className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Set all values to auto</button>
            <button className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Unset this value</button>
            <button className="text-sm w-full text-center p-2 hover:bg-gray-300 duration-100 ease-linear">Unset all values</button>
        </div>
    )
}

export default Dropdown;