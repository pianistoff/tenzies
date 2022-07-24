import React from "react";
import { holdDice } from "../features/diceSlice";
import { useDispatch } from "react-redux";

const Pip = () => <span className="pip" />;

const Face = ({ children, isHeld, id }) => {
    const dispatch = useDispatch();
	return (
    <div
        className={isHeld ? "face held" : "face"}
        onClick={() => dispatch(holdDice(id))}
    >
        {children}
    </div>
	)
};

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
