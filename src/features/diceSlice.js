import { createSlice, nanoid } from "@reduxjs/toolkit";

function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
    };
}

function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie());
    }
    return newDice;
}

export const diceSlice = createSlice({
    name: "dice",
    initialState: allNewDice(),
    reducers: {
        rollDice(state) {
            return state.map((oldDie) => {
                return oldDie.isHeld ? oldDie : generateNewDie();
            });
        },
        holdDice(state, action) {
            return state.map((oldDie) => {
                return oldDie.id === action.payload
                    ? { ...oldDie, isHeld: !oldDie.isHeld }
                    : oldDie;
            });
        },
        newDice() {
            return allNewDice();
        },
    },
});

export const { rollDice, holdDice, newDice } = diceSlice.actions;

export const selectDice = state => state.dice;

export default diceSlice.reducer;
