import { ActionTypes } from '../actions/actionTypes'
const initialState = {
    isLoading: false,
    cards: null,
    listLoading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.GET_DESTINATION_REQUEST:
        return { ...state }
    case ActionTypes.GET_DESTINATION_SUCCESS:
        return { ...state }
    default:
        return state;
    }
};
