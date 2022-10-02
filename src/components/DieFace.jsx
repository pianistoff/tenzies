import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { holdDice } from '../store/diceSlice';

function DieFace({ children, isHeld, id }) {
  const dispatch = useDispatch();

  return (
    <div
      className={isHeld ? 'face held' : 'face'}
      onClick={() => dispatch(holdDice(id))}
      role="button"
      tabIndex={0}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          dispatch(holdDice(id));
        }
      }}
    >
      {children}
    </div>
  );
}

DieFace.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  isHeld: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default DieFace;
