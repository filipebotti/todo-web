import React from 'react';
import styled from 'styled-components';
import { Colors } from './colors'

const StyledInput = styled.input`
    height:40px;
    width: 15rem;
    margin-bottom: 20px;
    border-top-width:0px;
    border-right-width: 0px;
    border-left-width:0px;
    border-bottom-width: 2px;
    border-bottom-color: #673AB7;
    color: ${Colors.DARK_GREY};
    background-color: transparent;

    :focus {
        outline: none;
    }
`;

const Input = ({value, onChange, placeholder, style }) => {
    return (
        <StyledInput 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={style}
        />
    )
};

export { Input };