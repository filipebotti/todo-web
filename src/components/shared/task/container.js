import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    height: 55px;
    background-color: white;
    border-radius: 3px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 0px 20px 0px 20px;
    margin-bottom: 10px;
    display: flex;
    height: 40px;
    width: 20rem;
`;

export default ({opacity = 1, children}) => {
    return (        
        <TaskContainer>
            {children}
        </TaskContainer>        
    );
};

