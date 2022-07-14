import React from "react";

export default function Die({value, isHeld, hold, id}) {
    const color = isHeld ? "#59E391" : "white";
    return (
    <div className="die-box" onClick={hold} style={{backgroundColor: color}}>
        <p className="die-num" >{value}</p>
    </div>
    )
}