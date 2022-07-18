import React from "react";
import Die from "./components/Die";
import confetti from "canvas-confetti";
import { nanoid } from "nanoid";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        if (
            dice.every((die) => die.isHeld) &&
            dice.every((die) => {
                return die.value === dice[0].value;
            })
        ) {
            setTenzies(true);
        }
    }, [dice]);
    
    React.useEffect(() => {
        let interval = null;
        if (tenzies) {
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
    }, [tenzies]);

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

    function resetGame() {
        setTenzies(false);
        setDice(allNewDice());
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
                    <button
                        onClick={tenzies ? resetGame : rollDice}
                        className="btn"
                    >
                        {tenzies ? "New Game" : "Roll"}
                    </button>
                </div>
            </div>
        </main>
    );
}
