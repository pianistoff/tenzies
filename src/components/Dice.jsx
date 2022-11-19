import React from 'react';
import { useSelector } from 'react-redux';
import { selectDice } from '../store/diceSlice';
import Die from './DieIndex';

function Dice() {
  const dice = useSelector(selectDice);

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} />
  ));

  return <div className="dice">{diceElements}</div>;
}

export default Dice;
