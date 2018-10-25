import React from 'react';
import styled from 'styled-components';
import { Colors } from './colors';

const ButtonContainer = styled.button`
    height: 40px;
    background-color: ${Colors.PURPLE};
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;    
    outline: none;
    border: none;

    :active {
        background-color: ${Colors.LIGHT_PURPLE};
        color: ${Colors.DARK_GREY};
    }    
`;

const ButtonText = styled.span`
    font-size: 15px;
    color: ${Colors.LIGHT_PURPLE};
`;

const Button = ({text, onPress, disabled, children}) => {
    return (
        <ButtonContainer 
            onClick={onPress}
            disabled={disabled}
        >
            {text && <ButtonText>{text}</ButtonText>}
            {!text && children}
        </ButtonContainer>
    )
}

export { Button, ButtonText }