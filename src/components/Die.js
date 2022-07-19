import React from "react";
import "./die.css"

const Pip = () => <span className="pip" />;

const Face = ({ children, isHeld, hold }) => <div className={isHeld ? "face held" : "face"} onClick={hold}>{children}</div>;

export default function Die({value, isHeld, hold}) {
    let pips = Number.isInteger(value)
		? Array(value)
				.fill(0)
				.map((_, i) => <Pip key={i} />)
		: null;
	return <Face isHeld={isHeld} hold={hold}>{pips}</Face>;
}