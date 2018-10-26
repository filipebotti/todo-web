import React from 'react';
import styled from 'styled-components';
import { NewTask, Task } from '../shared';
import uuid from 'uuid/v4';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/task';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
`;



class TaskList extends React.Component {

    constructor() {
        super();

        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
        this.state = {
            newTaskDescription: '',
        }

        this.onRefresh = this.onRefresh.bind(this);
    }

    handleNewTask(event) {
        if(event.key === 'Enter' && this.state.newTaskDescription) {
            this.props.taskActions.addTask({
                description: this.state.newTaskDescription,
                uuid: uuid(),
                isProcessing: true
            });
            this.setState({ newTaskDescription: '' })
            this._taskInput.focus();
        }
    }

    handleRemoveTask(task) {
        this.props.taskActions.removeTask(task);
    }

    onRefresh() {
        this.props.taskActions.fetchTasks();
    }

    render() {
        return( 
            <Container>
                <NewTask
                    value={this.state.newTaskDescription}
                    onChange={({target}) => this.setState({ newTaskDescription: target.value })}
                    onSubmitEditing={this.handleNewTask}
                    textRef={ref => this._taskInput = ref}                      
                />        
                {this.props.task.tasks.length > 0 && this.props.task.tasks.map((item) => {
                    return (
                        <Task 
                            key={item.uuid} 
                            task={item} 
                            onCheckTask={() => this.handleRemoveTask(item)}
                            onPress={() => { this.props.history.push('/task-detail', { item })}}
                        />
                    )
                })}
            </Container>
        )
    }
}

export default withRouter(connect(
    state => ({
        task: state.task
    }),
    dispatch => ({
        taskActions: bindActionCreators(taskActions, dispatch)
    })
)(TaskList));
