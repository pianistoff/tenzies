import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTenMs, selectTime } from '../store/timeSlice';
import { selectGameOn } from '../store/gameOnSlice';

function Stopwatch() {
  const gameOn = useSelector(selectGameOn);
  const time = useSelector(selectTime);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (gameOn) {
      interval = setInterval(() => {
        dispatch(addTenMs());
      }, 10);
    } else if (!gameOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameOn]);

  return (
    <p className="stopwatch">
      <span>{`0${Math.floor((time / 60000) % 60)}`.slice(-2)}:</span>
      <span>{`0${Math.floor((time / 1000) % 60)}`.slice(-2)}:</span>
      <span>{`0${(time / 10) % 100}`.slice(-2)}</span>
    </p>
  );
}

export default Stopwatch;
