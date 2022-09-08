import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectDice } from '../store/diceSlice';
import { endGame } from '../store/gameOnSlice';

const useHandleEndGame = () => {
    const dice = useSelector(selectDice);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (
            dice.every((die) => die.isHeld) &&
            dice.every((die) => {
                return die.value === dice[0].value;
            })
        ) {
            dispatch(endGame());
        }
    }, [dice]);
}

export default useHandleEndGame;