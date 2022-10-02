import { useDispatch } from 'react-redux';
import { rollDice } from '../store/diceSlice';
import { addRoll } from '../store/rollsCountSlice';

const useRollDice = () => {
  const dispatch = useDispatch();

  function roll() {
    dispatch(rollDice());
    dispatch(addRoll());
  }

  return roll;
};

export default useRollDice;
