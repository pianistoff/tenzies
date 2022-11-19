import React from 'react';
import Text from './components/Text';
import Dice from './components/Dice';
import Stopwatch from './components/Stopwatch';
import Button from './components/Button';
import ScoreTable from './components/ScoreTable';
import useEndGame from './hooks/useEndGame';
import useFireworks from './hooks/useFireworks';
import useSaveGameData from './hooks/useSaveGameData';
import RollsCounter from './components/RollsCounter';
import HamburgerMenu from './components/HamburgerMenu';

export default function App() {
  useEndGame();
  useSaveGameData();
  useFireworks();

  return (
    <main className="main">
      <div className="outer-box">
        <HamburgerMenu />
        <ScoreTable />
        <div className="inner-box">
          <Text />
          <Dice />
          <div className="bottom">
            <RollsCounter />
            <Button />
            <Stopwatch />
          </div>
        </div>
      </div>
    </main>
  );
}
