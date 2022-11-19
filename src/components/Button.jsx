import React from 'react';
import { useSelector } from 'react-redux';
import { selectGameOn } from '../store/gameOnSlice';
import useNewGame from '../hooks/useNewGame';
import useRollDice from '../hooks/useRollDice';

function Button() {
  const gameOn = useSelector(selectGameOn);
  const newGame = useNewGame();
  const roll = useRollDice();

  return (
    <button type="button" onClick={gameOn ? roll : newGame} className="btn">
      {!gameOn ? 'New Game' : 'Roll'}
    </button>
  );
}

export default Button;
