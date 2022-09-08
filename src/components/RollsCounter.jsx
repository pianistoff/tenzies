import React from 'react'
import { useSelector } from 'react-redux';
import { selectRollsCount } from '../store/rollsCountSlice';

const RollsCounter = () => {
    const rollsCount = useSelector(selectRollsCount);

  return (
    <p className="rolls-count">{rollsCount}</p>
  )
}

export default RollsCounter