import { NAVIGATE_BACKWARD, NAVIGATE_FORWARD, NAVIGATE_TO, SELECT_CHOICE } from './actionTypes';


// Returns action type and payload to access relevant data to be updated
// and the new value
// In this case new value is not needed. Its simply a toggle.
export const selectChoice = (questionId, choiceId, isSelected) => ({
    type: SELECT_CHOICE,
    payload: {
        questionId:  questionId - 1, 
        choiceId: choiceId - 1,
        isSelected
    }
});


export const navigateForward = (newQuestionId) => ({
    type: NAVIGATE_FORWARD,
    payload: {
        newQuestionId
    }
})

export const navigateBackward = (newQuestionId) => ({
    type: NAVIGATE_BACKWARD,
    payload: {
        newQuestionId
    }
})

export const navigateTo = (newQuestionId) => ({
    type: NAVIGATE_TO,
    payload: {
        newQuestionId
    }
})

