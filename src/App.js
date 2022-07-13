import React from "react";
import Die from './components/Die';

export default function App() {
    const [diceNums, setDiceNums] = React.useState(allNewDice());

    function allNewDice() {
        function randomNum() {
            return Math.ceil(Math.random() * 6);
        }
        return [randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum()];
    }

    function rollDice() {
        setDiceNums(allNewDice());
    }
    
    const dice = diceNums.map((num, index) => <Die key={index} value={num} />);
    return (
        <main className="main"> 
            <div className="outer-box">
                <div className="inner-box">
                    <div className="dice">
                        {dice}
                    </div>
                    <button onClick={rollDice} className="btn">Roll</button>
                </div>
            </div>
        </main>
    )
}