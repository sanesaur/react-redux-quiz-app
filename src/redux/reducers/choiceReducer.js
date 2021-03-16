import produce from 'immer'
import * as actions from '../actionTypes'

// Error: Maximum update depth exceeded. This can happen when a component 
// repeatedly calls setState inside componentWillUpdate or componentDidUpdate. 
// React limits the number of nested updates to prevent infinite loops.

const initialState = []


// Reducing function that creates a new object with updated state 
// when action is performed 

// Creates a copy of state as draftState. Does not change state directly

export default function choiceReducer(state = initialState, action) {
    switch(action.type) {
        case actions.SELECT_CHOICE:        
            return (
                produce(state, draftState => {
                    draftState[action.payload.questionId].choices[action.payload.choiceId].isSelected = action.payload.isSelected
                })
            )
        default:
            return state  
        }
}
