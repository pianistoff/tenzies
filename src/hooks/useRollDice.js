import { useDispatch } from "react-redux";

const useRollDice = () => {
    const dispatch = useDispatch();

    function roll() {
        dispatch(rollDice());
        dispatch(addRoll());
    }

    return roll;
}

export default useRollDice