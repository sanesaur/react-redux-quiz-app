import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        index: state.navigationIndex.index + 1,
        text : state.questionList[state.navigationIndex.index].text
    }
}

class Question extends Component {

    renderQuestion = () => {

        return(
            <div key={this.props.index}>
                <h4 >{this.props.text}</h4>
            </div>
        )
    }      

    render() { 
        return (
            <div>{
                    this.renderQuestion()
                }
            </div>
        );
    }
}
 
export default connect(mapStateToProps)(Question);