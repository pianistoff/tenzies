import React from 'react';
import confetti from "canvas-confetti";
import { useSelector } from 'react-redux';
import { selectDice } from '../store/diceSlice';
import { selectGameOn } from '../store/gameOnSlice';

const useFireworks = () => {
    const dice = useSelector(selectDice);
    const gameOn = useSelector(selectGameOn)

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
};

export default useFireworks;
