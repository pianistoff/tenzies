import React from "react";
import Die from "./components/Die.jsx";
import Stopwatch from "./components/Stopwatch.jsx";
import Table from "./components/Table.jsx";
import { useSelector } from "react-redux";
import { selectDice } from "./store/diceSlice";
import { selectGameOn } from "./store/gameOnSlice";
import { selectRollsCount } from "./store/rollsCountSlice";
import { selectTableOpen } from "./store/tableOpenSlice";
import useNewGame from './hooks/useNewGame';
import useEndGame from './hooks/useEndGame.js';
import useFireworks from "./hooks/useFireworks.js";
import useRollDice from './hooks/useRollDice';

export default function App() {
    const dice = useSelector(selectDice);
    const gameOn = useSelector(selectGameOn);
    const rollsCount = useSelector(selectRollsCount);
    const tableOpen = useSelector(selectTableOpen);
    const newGame = useNewGame();
    const roll = useRollDice();
    useEndGame();
    useFireworks();

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            id={die.id}
        />
    ));

    return (
        <main className="main">
            <div className="outer-box">
                {tableOpen && <Table />}
                <div className="inner-box">
                    <h1 className="title">Tenzies</h1>
                    <p className="instructions">
                        Roll until all dice are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                    <div className="dice">{diceElements}</div>
                    <div className="bottom">
                        <p className="rolls-count">{rollsCount}</p>
                        <button
                            onClick={gameOn ? roll : newGame}
                            className="btn"
                        >
                            {!gameOn ? "New Game" : "Roll"}
                        </button>
                        <Stopwatch />
                    </div>
                </div>
            </div>
        </main>
    );
}
