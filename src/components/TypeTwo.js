import { useState } from "react";
import SpacingTwo from "./SpacingTwo";
import DummyComponent1 from "./DummyComponent1";


const TypeTwo = () => {

    const [margin, setMargin] = useState({
        marginLeft: "20px",
        marginTop: "20px",
        marginRight: "20px",
        marginBottom: "20px",
    })

    const [padding, setPadding] = useState({
        paddingLeft: "20px",
        paddingTop: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
    })

    const getMargin = (margin) => {
        setMargin(margin);
    }

    const getPadding = (padding) => {
        setPadding(padding);
    }

    return (
        <div className="container min-h-screen min-w-full h-full w-full bg-white grid xl:grid-cols-2 grid-cols-1 place-items-center gap-10">
            <SpacingTwo getPadding={getPadding} getMargin={getMargin}/>
            <DummyComponent1 margin={margin} padding={padding}/>
        </div>
    )
}

export default TypeTwo;