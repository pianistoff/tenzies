import React from "react";
import Die from "./components/Die";
import Stopwatch from "./components/Stopwatch";
import Table from "./components/Table";
import confetti from "canvas-confetti";
import { useSelector, useDispatch } from "react-redux";
import { startGame, endGame } from "./features/gameOnSlice";
import { rollDice, newDice } from "./features/diceSlice";
import { resetStopwatch } from "./features/timeSlice";
import { addRoll, resetRollsCount } from "./features/rollsCountSlice";
import { selectDice } from "./features/diceSlice";
import { selectGameOn } from "./features/gameOnSlice";
import { selectTime } from "./features/timeSlice";
import { selectRollsCount } from "./features/rollsCountSlice";
import { selectTableOpen } from "./features/tableOpenSlice";

export default function App() {
    const dice = useSelector(selectDice);
    const gameOn = useSelector(selectGameOn);
    const time = useSelector(selectTime);
    const rollsCount = useSelector(selectRollsCount);
    const tableOpen = useSelector(selectTableOpen);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (
            dice.every((die) => die.isHeld) &&
            dice.every((die) => {
                return die.value === dice[0].value;
            })
        ) {
            dispatch(endGame());
        }
    }, [dice]);

    React.useEffect(() => {
        let interval = null;
        if (
            !gameOn &&
            dice.every((die) => die.isHeld) &&
            dice.every((die) => {
                return die.value === dice[0].value;
            })
        ) {
            var duration = 15 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = {
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                zIndex: 0,
            };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            interval = setInterval(function () {
                var timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: {
                            x: randomInRange(0.1, 0.3),
                            y: Math.random() - 0.2,
                        },
                    })
                );
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: {
                            x: randomInRange(0.7, 0.9),
                            y: Math.random() - 0.2,
                        },
                    })
                );
            }, 250);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [gameOn]);

    function newGame() {
        dispatch(newDice());
        if (time !== 0) {
            dispatch(resetStopwatch());
        }
        if (rollsCount !== 0) {
            dispatch(resetRollsCount());
        }
        dispatch(startGame());
    }

    function roll() {
        dispatch(rollDice());
        dispatch(addRoll());
    }

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            id={die.id}
            // hold={() => dispatch(holdDice(die.id))}
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
