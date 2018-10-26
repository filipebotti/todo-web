import React from 'react';
import styled from 'styled-components';
import { Colors } from '../colors';
import TaskContainer from './container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskInput = styled.input`
    flex: 1;
    font-size: 14px;
    margin-left: 10px;
    color: ${Colors.DARK_GREY}
    border: none;

    :focus {
        outline: none;
    }
`;

const NewTask = ({ value, onChange, onSubmitEditing, textRef }) => {
    return (
        <TaskContainer>
            <FontAwesomeIcon icon="plus" style={{fontSize: '20px', color: Colors.DARK_GREY }}/>
            <TaskInput 
                placeholder={"Nova Tarefa..."}
                value={value}
                onChange={onChange}
                onKeyPress={onSubmitEditing}
                ref={textRef}
                blurOnSubmit={false}
            />                    
        </TaskContainer>
    );
};

export default  NewTask; 