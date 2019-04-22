import * as actionType from './ActionType';

export const addCounter = (increment) => ({
    type: actionType.ADD_COUNTER,
    payload: increment
});

export const removeCounter = () => ({
    type: actionType.REMOVE_COUNTER,
    payload: 1
});