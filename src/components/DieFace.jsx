import React from 'react'
import { holdDice } from "../store/diceSlice";
import { useDispatch } from "react-redux";

const DieFace = ({ children, isHeld, id }) => {
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

export default DieFace