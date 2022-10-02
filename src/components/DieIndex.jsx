import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import DieFace from './DieFace';
import DiePip from './DiePip';

function DieIndex({ value, isHeld, id }) {
  const pips = Array(value)
    .fill(0)
    .map(() => <DiePip key={nanoid()} />);
  return (
    <DieFace isHeld={isHeld} id={id}>
      {pips}
    </DieFace>
  );
}

DieIndex.propTypes = {
  value: PropTypes.number.isRequired,
  isHeld: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default DieIndex;
