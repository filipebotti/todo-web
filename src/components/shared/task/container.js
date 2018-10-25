import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    height: 55;
    backgroundColor: white;
    borderRadius: 3;
    alignItems: center;
    justifyContent: center;
    flexDirection: row;
    paddingHorizontal: 20px;
    marginBottom: 10;
`;

export default ({opacity = 1, children}) => {
    return (        
        <TaskContainer>
            {children}
        </TaskContainer>        
    );
};

