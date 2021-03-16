import { combineReducers } from 'redux'


// Only function exported
import choiceReducer from './choiceReducer'
import navigationIndexReducer from './navigateIndexReducer'

// Combine different reducer functions into a single reducer
// function. The combines 
// There is a single child reducer. But adding namespace
// case in which no of reducers need to be added in future

// Returns function that invokes every reducer inside the
// reducer object and construct a state object with same shape

//

export default combineReducers(
    { 
        questionList: choiceReducer,
        navigationIndex: navigationIndexReducer
    });