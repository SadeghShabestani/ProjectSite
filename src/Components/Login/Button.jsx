import Styled from "styled-components";
import React from "react";

export default function Button({content}) {
    return <StyledButton>{content}</StyledButton>
}

const StyledButton = Styled.button`
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
`;