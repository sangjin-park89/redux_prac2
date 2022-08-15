const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
const ADD_NUMBER = "ADD_NUMBER";
const MIN_NUMBER = "MIN_NUMBER";

export const plusOne = () => {
    return {
        type: PLUS_ONE,
    };
};

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    };
};

export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload,
    };
};

export const minNumber = (payload) => {
    return {
        type: MIN_NUMBER,
        payload,
    };
};

const initialState = {
    number: 0,
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1,
            };
        case MINUS_ONE:
            return {
                number: state.number - 1,
            };
        case ADD_NUMBER:
            return {
                number: state.number + action.payload,
            };
        case MIN_NUMBER:
            return {
                number: state.number - action.payload,
            };

        default:
            return state;
    }
};

export default counter;