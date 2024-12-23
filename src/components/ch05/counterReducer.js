// reducers/counterReducer.js

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...state, counter: state.counter + 1 };
        case 'counter/decrement':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

export default counterReducer;
