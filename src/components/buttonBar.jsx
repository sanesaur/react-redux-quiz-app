import React, { Component } from 'react';
import { connect } from "react-redux";
import { navigateForward, navigateBackward } from '../redux/actions'

const mapStateToProps = state => {
    return {
        index: state.navigationIndex.index,
        isFirst: state.navigationIndex.index === 0 ? true : false,
        isLast: state.navigationIndex.index === state.questionList.length -1 ? 
                                                            true : false,
        choices: state.questionList[state.navigationIndex.index].choices
    }
}

class ButtonBar extends Component {

    handleNavigateForward = () => {
        this.props.navigateForward(this.props.index)
    }

    handleNavigateBackward = () => {
        this.props.navigateBackward(this.props.index)
    }

    renderBackButton = () => {
        let style = "btn btn-info"

        if(this.props.isFirst === true) {
            return (
                <button className={ style } disabled
                    onClick={this.handleNavigateBackward}>Back
                </button> 
            )
        } 
        return (
                <button className={ style } 
                    onClick={this.handleNavigateBackward}>Back
                </button> 
        )
    }

    renderNextButton = () => {   
        let style = "btn btn-info"
        if(this.props.isLast === true) {
            return (
                <button type="button" className={ style }  disabled
                    onClick={this.handleNavigateForward}>Next
                </button>
            )
        } 

        return (
            <button type="button" className={ style } 
                onClick={this.handleNavigateForward}>Next
            </button>
        )
    }    

    renderFinishButton = () => {
            let style = "btn btn-success"
            return (
                <button  type="button" className={ style }
                    onClick={this.props.clickFinish}>Finish
                </button>
            )            
    }

    render() { 
        return ( 
                    <div>
                        {this.renderBackButton()}
                        &nbsp;&nbsp;
                        {this.renderNextButton()}
                        &nbsp;&nbsp;
                        {this.renderFinishButton()}
                    </div>
         );
    }
}
 
export default connect(
    mapStateToProps,
    {
        navigateForward,
        navigateBackward
    }
)(ButtonBar);