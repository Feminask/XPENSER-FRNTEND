



import {
    MAKE_REQUEST,
    FAIL_REQUEST,
    GET_EXPENSE_LIST,
    DELETE_EXPENSE,
    ADD_EXPENSE,
    UPDATE_EXPENSE,
    GET_EXPENSE_OBJ
} from "./ActionType";

const initialstate = {
    loading: true,
    expenselist: [],
    expenseobj: {},
    errormessage: ''
};

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errormessage: action.payload
            };
        case GET_EXPENSE_LIST:
            return {
                ...state,
                loading: false,
                errormessage: '',
                expenselist: action.payload,
                expenseobj: {}
            };
        case DELETE_EXPENSE:
            return {
                ...state,
                loading: false,
                expenselist: state.expenselist.filter(expense => expense.id !== action.payload)
            };
        case ADD_EXPENSE:
        case UPDATE_EXPENSE:
            return {
                ...state,
                loading: false
            };
        case GET_EXPENSE_OBJ:
            return {
                ...state,
                loading: false,
                expenseobj: action.payload
            };
        default:
            return state;
    }
};
