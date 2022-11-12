import React from 'react';
import { useSelector } from 'react-redux';
import Die from './components/DieIndex';
import Stopwatch from './components/Stopwatch';
import ScoreTable from './components/ScoreTable';
import { selectDice } from './store/diceSlice';
import { selectGameOn } from './store/gameOnSlice';
import useNewGame from './hooks/useNewGame';
import useEndGame from './hooks/useEndGame';
import useFireworks from './hooks/useFireworks';
import useRollDice from './hooks/useRollDice';
import RollsCounter from './components/RollsCounter';
import HamburgerMenu from './components/HamburgerMenu';

export default function App() {
  const dice = useSelector(selectDice);
  const gameOn = useSelector(selectGameOn);
  const newGame = useNewGame();
  const roll = useRollDice();
  useEndGame();
  useFireworks();

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} />
  ));

  return (
    <main className="main">
      <div className="outer-box">
        <HamburgerMenu />
        <ScoreTable />
        <div className="inner-box">
          <h1 className="title">Tenzies</h1>
          <p className="instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="dice">{diceElements}</div>
          <div className="bottom">
            <RollsCounter />
            <button
              type="button"
              onClick={gameOn ? roll : newGame}
              className="btn"
            >
              {!gameOn ? 'New Game' : 'Roll'}
            </button>
            <Stopwatch />
          </div>
        </div>
      </div>
    </main>
  );
}
