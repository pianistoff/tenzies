import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openTable,
  closeTable,
  selectTableOpen,
} from '../store/tableOpenSlice';

function HamburgerMenu() {
  const [hamburgerActive, setHamburgerActive] = React.useState(false);
  const tableOpen = useSelector(selectTableOpen);
  const dispatch = useDispatch();

  const handleHamburger = () => {
    if (tableOpen) {
      dispatch(closeTable());
    } else {
      dispatch(openTable());
    }
    setHamburgerActive((prevHamburgerActive) => !prevHamburgerActive);
  };

  return (
    <button
      className={`hamburger hamburger--collapse ${
        hamburgerActive && 'is-active'
      }`}
      type="button"
      onClick={handleHamburger}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

export default HamburgerMenu;
