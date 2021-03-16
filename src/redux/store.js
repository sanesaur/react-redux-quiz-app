import { createStore } from 'redux'
import rootReducer from './reducers/index'

import sampleQuestionList from '../data/sample' 

// Store holds complete state tree of the app.
// There should only 

// Exported combined reducer function passed as an
// argument to createStore

//Preload initializes the state
let preloadedState = {
    questionList: sampleQuestionList
}

const store = createStore(rootReducer, preloadedState)

export default store
