import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveGameData } from '../store/tableDataSlice';
import { selectGameOn } from '../store/gameOnSlice';
import { selectDice } from '../store/diceSlice';
import { selectTime } from '../store/timeSlice';
import { selectRollsCount } from '../store/rollsCountSlice';
import formatTime from '../formatTime';

const useSaveGameData = () => {
  const dice = useSelector(selectDice);
  const gameOn = useSelector(selectGameOn);
  const time = useSelector(selectTime);
  const rollsCount = useSelector(selectRollsCount);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (
      !gameOn &&
      dice.every((die) => die.isHeld) &&
      dice.every((die) => die.value === dice[0].value)
    ) {
      dispatch(
        saveGameData({
          date: new Date().toString('yyyy/MM/dd HH:mm:ss'),
          rollsCount,
          time: formatTime(time, 'mm:ss.msms'),
        })
      );
    }
  });
};

export default useSaveGameData;
