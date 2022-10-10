import React from 'react';

function HamburgerMenu() {
  const [hamburgerActive, setHamburgerActive] = React.useState(false);

  const handleHamburger = () => {
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
