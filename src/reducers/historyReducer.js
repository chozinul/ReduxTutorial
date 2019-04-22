import * as actionType from '../actions/ActionType'

const historyReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.SET_HISTORY:
            return state.concat([action.payload])
        default:
            return state;
    }
}

export default historyReducer