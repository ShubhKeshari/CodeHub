import { useEffect, useRef } from "react"

export const FocusInput=()=>{
    const DivBox = useRef(null);
    const InputBox = useRef(null);
    
    useEffect(()=>{
        InputBox.current.focus();
    },[])
    
    const handleClick = ()=>{
        
        const color = DivBox.current;

        if(color){
            color.style.backgroundColor = color.style.backgroundColor === "yellow" ? "green" : "yellow";
        }
    }

    return (
        <>
        <input type="text" ref={InputBox} />
        <div ref={DivBox} style={{width:"100px",height:"100px",border:"2px solid red"}} onClick={handleClick}></div>
    </>
    )
}