import { useState } from "react";
import CodeShow from "./CodeShow";
import Spacing from "./Spacing";

const TypeOne = () => {
    const [code, setCode] = useState({});

    const getCode = (code) => {
        setCode(code)
    }

    return (
        <div className="container min-h-screen min-w-full h-full w-full bg-white grid  grid-cols-1 place-items-center gap-10">
            <Spacing getCode={getCode}/>
            <CodeShow code={code}/>
        </div>
    )
}

export default TypeOne;