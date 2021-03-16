import React, { Component } from 'react';
import { connect } from 'react-redux'

import { selectChoice } from '../redux/actions'


const mapStateToProps = state => {
    return {
        questionId: state.questionList[state.navigationIndex.index].id,
        choices: state.questionList[state.navigationIndex.index].choices,
        question: state.questionList[state.navigationIndex.index]
    } 
}


class Choice extends Component 
{
    renderChoice = (choiceId, text, isSelected) => {

        return (
                <input name={text}
                        type='checkbox'
                        checked = {isSelected}
                        onChange={
                            (event) => this.handleSelection(
                                choiceId, event.target.checked) 
                        }
                /> 
        )
    }

    handleSelection = (choiceId, isChecked) => {
        this.props.selectChoice(this.props.questionId, choiceId, isChecked)
    }

    render() { 

        return (
                <div>
                    <table className="table table-hover table-striped">
                        <tbody>
                        {
                            this.props.choices.map(choice => 

                                        <tr key={choice.id}> 
                                            <h5 className="pl-3 pt-3 pb-3">
                                                {                                 
                                                    this.renderChoice(choice.id, choice.text, 
                                                                                    choice.isSelected)
                                                }
                                                <span className="pl-3 pt-3 pb-3">{choice.text}</span>                                                
                                            </h5>
                                    </tr>
                                )
                        }
                    </tbody>
                    </table>                    
                </div>
        );
    }
}
 
export default connect(
    mapStateToProps,
    { selectChoice }
)(Choice);