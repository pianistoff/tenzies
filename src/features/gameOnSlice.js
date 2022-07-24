import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameOn: false
}

export const gameOnSlice = createSlice({
    name: "gameOn",
    initialState,
    reducers: {
        startGame: state => {
            state.gameOn = true;
        },
        endGame: state => {
            state.gameOn = false;
        }
    }
})

export const { startGame, endGame } = gameOnSlice.actions;

export default gameOnSlice.reducer;