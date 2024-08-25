import { useEffect, useState } from "react";
import { cssRegex } from "../utils/CONSTANTS";
import { matchRegex } from "../utils/matchRegex";
import Input from "./Input";
import { useSelector } from "react-redux";

const Spacing = ({getCode}) => {
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

    const [changes, setChanges] = useState({
        changes: {
            margin: {},
            padding: {}
        },
        values: {
            margin: {...confirmedMarginState},
            padding: {...confirmedPaddingState}
        }
    })

    const dropdownClickInfo = useSelector((store) => store.dropdown.values);

    useEffect(() => {
        getCode(changes);
    }, [changes])
        
    const handleDropdownClicked = (type, value, isPadding, position) => {
        if(type === "" || value === "") return;
        if(isPadding) {
            if(type === "all") {
                setPaddingState({
                    paddingLeft: value,
                    paddingTop: value,
                    paddingRight: value,
                    paddingBottom: value,
                })
                setConfirmedPaddingState({
                    paddingLeft: value,
                    paddingTop: value,
                    paddingRight: value,
                    paddingBottom: value,
                })
            } else {
                setPaddingState(prevState => {
                    return {
                        ...prevState, 
                        [position]: value
                    }
                })

                setConfirmedPaddingState(prevState => {
                    return {
                        ...prevState,
                        [position]: value
                    }
                })
            }
        } else {
            if(type === "all") {
                setMarginState({
                    marginLeft: value,
                    marginTop: value,
                    marginRight: value,
                    marginBottom: value,
                })
                setConfirmedMarginState({
                    marginLeft: value,
                    marginTop: value,
                    marginRight: value,
                    marginBottom: value,
                })
            } else {
                setMarginState(prevState => {
                    return {
                        ...prevState, 
                        [position]: value
                    }
                })

                setConfirmedMarginState(prevState => {
                    return {
                        ...prevState,
                        [position]: value
                    }
                })
            }
        }
    }

    useEffect(() => {
        handleDropdownClicked(dropdownClickInfo.updateType, dropdownClickInfo.updateValue, dropdownClickInfo.isPadding, dropdownClickInfo.updatePosition);
    }, [dropdownClickInfo])

    const handleChange = (e, position, isPadding) => {
        if(!cssRegex.test(e.target.value)) {
            e.target.style.border = "2px solid red";
        } else {
            e.target.style.border = "2px solid green";
        }
        
        if(isPadding) {
            if(cssRegex.test(e.target.value)) {
                setChanges(prevChanges => {
                    let newChanges = {
                        changes: {
                            margin: {},
                            padding: {[position]: e.target.value}
                        },
                        values: {
                            margin: {...prevChanges.values.margin},
                            padding: {...prevChanges.values.padding},
                        }
                    }

                    return newChanges;
                })
            }

            setPaddingState(paddingState => {
                return {
                    ...paddingState, 
                    [position]: e.target.value
                }
            })
        } else {
            if(cssRegex.test(e.target.value)) {
                setChanges(prevChanges => {
                    let newChanges = {
                        changes: {
                            margin: {[position]: e.target.value},
                            padding: {}
                        },
                        values: {
                            margin: {...prevChanges.values.margin},
                            padding: {...prevChanges.values.padding},
                        }
                    }

                    return newChanges;
                })
            }

            setMarginState(marginState => {
                return {
                    ...marginState, 
                    [position]: e.target.value
                }
            })
        }

        getCode(changes);
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

        if(matchRegex(marginState) && matchRegex(paddingState)) {
            setChanges(prevChanges => {
                let newChanges = {
                    changes: {
                        margin: {...prevChanges.changes.margin},
                        padding: {...prevChanges.changes.padding}
                    },
                    values: {
                        margin: {marginState},
                        padding: {paddingState},
                    }
                }
    
                return newChanges;
            })
        } else {
            setChanges(prevChanges => {
                let newChanges = {
                    changes: {
                        margin: {...prevChanges.changes.margin},
                        padding: {...prevChanges.changes.padding}
                    },
                    values: {
                        margin: {confirmedMarginState},
                        padding: {confirmedPaddingState},
                    }
                }
    
                return newChanges;
            })
        }

        getCode(changes);
    }

    return (
        <div className="relative bg-[#f8fafb] border-2 border-slate-300 rounded-md p-2 hover:bg-orange-200 ease-linear duration-100 cursor-pointer flex flex-col items-center justify-center gap-5">
            <span className="absolute top-2 left-2 text-sm font-semibold">Margins</span>
            <Input value={marginState.marginTop} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"marginTop"} isPadding={false}/>
            
            <div className="relative flex items-center justify-center md:gap-5 gap-1">
                <Input value={marginState.marginLeft} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"marginLeft"} isPadding={false}/>
                

                <div style={confirmedMarginState}  className="relative bg-[#f8fafb] border-2 border-slate-300 rounded-md p-2 flex flex-col items-center justify-center gap-5 hover:bg-lime-200 duration-100 ease-linear cursor-pointer">
                    <span className="absolute top-2 left-2 md:text-sm text-xs font-semibold">Paddings</span>

                    <Input value={paddingState.paddingTop} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"paddingTop"} isPadding={true}/>

                    <div style={confirmedPaddingState} className="flex items-center justify-center md:gap-5 gap-1">
                        
                        <Input value={paddingState.paddingLeft} handleChangeFunc={handleChange} confirmChangeFunc={confirmChange} position={"paddingLeft"} isPadding={true}/>

                        <div className="md:w-48 w-0 h-10 rounded-md bg-white hover:bg-blue-200 ease-linear duration-100"></div>

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