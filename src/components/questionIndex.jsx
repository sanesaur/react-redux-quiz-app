import React, { Component } from 'react';
import { connect } from "react-redux";

import { navigateTo } from '../redux/actions'


const mapStateToProps = state => {
    return {
        index: state.navigationIndex.index + 1,
        questionList: state.questionList
    }
}

class QuestionIndex extends Component {

    handleNavigateTo = (index) => {
        this.props.navigateTo(index)    
    }

    renderQuestionIndex = (index, questionId) => {
        let isAddressed = false

        this.props.questionList[index - 1].choices.forEach(choice => {
            if(choice.isSelected === true) {
                isAddressed = true
            }
        });

        let style = "btn btn-primary"

        if(isAddressed === true) {
            style = "btn btn-secondary"
        } 

        if(this.props.index === index) {
            style = "btn btn-light"
        }

        return (
            <button className={ style } key={index}  
            onClick={ (event) => this.handleNavigateTo(questionId)}>
            {index}
        </button>            
        )

    }


    render() { 

        let counter = 1
        return (

            // <div key="questionIndex"> {
            //     this.props.questionList.map(question => 
            //         <span key={"span_question_index_" + counter}>
            //             <button className="btn btn-info" key={counter}  
            //                 onClick={ (event) => this.handleNavigateTo(question.id)}>
            //                 {counter++}
            //             </button>
            //             &nbsp;&nbsp;
            //         </span>
            //     )
            // }
            // </div>   
            
            <div key="questionIndex"> {
                this.props.questionList.map(question => 
                    <span key={"span_question_index_" + counter}>
                        { this.renderQuestionIndex(counter++, question.id) }
                        &nbsp;&nbsp;
                    </span>
                )
            }
            </div>               
        )
    }
}
 
export default connect(
    mapStateToProps,
    { navigateTo }
)(QuestionIndex)