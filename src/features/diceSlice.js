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

const initialState = {
    dice: allNewDice(),
};

export const diceSlice = createSlice({
    name: "dice",
    initialState,
    reducers: {
        rollDice(state) {
            state.dice = state.dice.map((oldDie) => {
                return oldDie.isHeld ? oldDie : generateNewDie();
            });
        },
        holdDice(state, action) {
            state.dice = state.dice.map((oldDie) => {
                return oldDie.id === action.payload
                    ? { ...oldDie, isHeld: !oldDie.isHeld }
                    : oldDie;
            });
        },
        newDice(state) {
            state.dice = allNewDice();
        },
    },
});

export const { rollDice, holdDice, newDice } = diceSlice.actions;

export default diceSlice.reducer;
