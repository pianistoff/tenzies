import React from "react";

export default function Die({value}) {
    return (
    <div className="die-box">
        <p className="die-num">{value}</p>
    </div>
    )
}