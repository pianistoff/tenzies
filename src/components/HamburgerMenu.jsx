import React from 'react';

function HamburgerMenu() {
  const [isHamburgerActive, setIsHamburgerActive] = React.useState(false);

  const handleHamburger = () => {
    setIsHamburgerActive((prevIsHamburgerActive) => !prevIsHamburgerActive);
  };

  return (
    <button
      className={`hamburger hamburger--collapse ${
        isHamburgerActive && 'is-active'
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
