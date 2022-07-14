import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    function rollDice() {
        setDice((oldDice) => {
            return oldDice.map((oldDie) => {
                return oldDie.isHeld ? oldDie : generateNewDie();
            });
        });
    }

    function holdDice(id) {
        setDice((oldDice) => {
            return oldDice.map((oldDie) => {
                return oldDie.id === id
                    ? { ...oldDie, isHeld: !oldDie.isHeld }
                    : oldDie;
            });
        });
    }

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            id={die.id}
            hold={() => holdDice(die.id)}
        />
    ));
    return (
        <main className="main">
            <div className="outer-box">
                <div className="inner-box">
                    <h1 className="title">Tenzies</h1>
                    <p className="instructions">
                        Roll until all dice are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                    <div className="dice">{diceElements}</div>
                    <button onClick={rollDice} className="btn">
                        Roll
                    </button>
                </div>
            </div>
        </main>
    );
}
