import * as actions from '../actionTypes';

const initialState = {
    index: 0
}


//Here its not a deep object. Use spread operator

export default function navigationIndexReducer(state = initialState, action) {
    switch(action.type) {
        case actions.NAVIGATE_BACKWARD:
            return {
                ...state,
                index: action.payload.newQuestionId - 1
            }
        case actions.NAVIGATE_FORWARD:
            return {
                ...state,
                index: action.payload.newQuestionId + 1
            }
        case actions.NAVIGATE_TO:
            return {
                ...state,
                index: action.payload.newQuestionId - 1 
            }
        default:
            return state
    }
}