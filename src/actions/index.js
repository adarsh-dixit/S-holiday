import { ActionTypes } from './actionTypes'

export const getDestinationRequest = (status) => {
    return {
        type: ActionTypes.GET_DESTINATION_REQUEST,
        payload: status
    };
};

export const getDestinationSuccess = (data) => {
    return {
        type: ActionTypes.GET_DESTINATION_SUCCESS,
        payload: data
    };
};
