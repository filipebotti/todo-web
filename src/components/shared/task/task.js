import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'
import TaskContainer from './container';


const TaskText = styled.span`
    font-size: 14px;
    color: ${props => props.isProcessing ? Colors.LIGHT_PURPLE : Colors.DARK_GREY};
`;

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    padding: 0px;
    justify-content: flex-start;
`;

const FlexButtonWrapper = styled(ButtonWrapper)`
    display: flex;
    flex: 1;
    margin-left: 10px;
`;

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isChecked: props.task.deleted_at != null,
        }

        this.renderCheckIcon = this.renderCheckIcon.bind(this);
        this.onChecked = this.onChecked.bind(this);
    }

    renderCheckIcon() {
        const color = this.props.task.isProcessing ? Colors.LIGHT_PURPLE : Colors.DARK_GREY;
        if(this.state.isChecked)
            return <FontAwesomeIcon icon="check-square" style={{fontSize: '24px', color }}/>
        else
            return <FontAwesomeIcon icon="square" style={{fontSize: '24px', color }}/>
    }

    onChecked() {
        this.setState ({
            isChecked: true
        });

        if(this.props.onCheckTask)
            this.props.onCheckTask(this.props.task);
    }

    render() {
        return (
            <TaskContainer>
                <ButtonWrapper 
                    disabled={this.state.isChecked || this.props.task.isProcessing} 
                    onClick={this.onChecked}
                >
                    {this.renderCheckIcon()}
                </ButtonWrapper>
                <FlexButtonWrapper 
                    disabled={this.state.isChecked || this.props.task.isProcessing} 
                    onClick={this.props.onPress}
                    style={{display: "flex"}}
                >
                    <TaskText isProcessing={this.props.task.isProcessing}>{this.props.task.description}</TaskText>           
                </FlexButtonWrapper>
            </TaskContainer>
        )
    }
}

Task.propTypes = {
    task: PropTypes.object,
    onCheckTask: PropTypes.func
}

export default Task;