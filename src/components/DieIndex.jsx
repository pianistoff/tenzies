import React from "react";
import Face from "./DieFace.jsx";
import Pip from "./DiePip.jsx";

export default function Die({ value, isHeld, id }) {
    let pips = Number.isInteger(value)
        ? Array(value)
              .fill(0)
              .map((_, i) => <Pip key={i} />)
        : null;
    return (
        <Face isHeld={isHeld} id={id}>
            {pips}
        </Face>
    );
}
