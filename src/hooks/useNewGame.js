import { useDispatch, useSelector } from 'react-redux';
import { startGame } from '../store/gameOnSlice';
import { newDice } from '../store/diceSlice';
import { resetStopwatch, selectTime } from '../store/timeSlice';
import { resetRollsCount, selectRollsCount } from '../store/rollsCountSlice';

const useNewGame = () => {
  const time = useSelector(selectTime);
  const rollsCount = useSelector(selectRollsCount);
  const dispatch = useDispatch();

  const newGame = () => {
    dispatch(newDice());
    if (time !== 0) {
      dispatch(resetStopwatch());
    }
    if (rollsCount !== 0) {
      dispatch(resetRollsCount());
    }
    dispatch(startGame());
  };

  return newGame;
};

export default useNewGame;
