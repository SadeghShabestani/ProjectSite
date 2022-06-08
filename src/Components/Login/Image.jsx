import React from "react";
import styled from 'styled-components';

export default function Image({src, alt, className}) {
    return <StyledImage src={src} alt={alt} className={className} />
}

const StyledImage = styled.img`
    
`;