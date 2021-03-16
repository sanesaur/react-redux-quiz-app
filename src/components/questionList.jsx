import React from 'react';
import Question  from './question'
import ButtonBar from './buttonBar'
import QuestionIndex from './questionIndex'
import Choice from './choice'



const QuestionList = () => 
{  
    return (            
        <div>
            <QuestionIndex></QuestionIndex>
            <Question></Question>
            <Choice></Choice>
            <ButtonBar></ButtonBar>
        </div>
    );
}

export default QuestionList
