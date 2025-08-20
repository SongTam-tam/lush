import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${(props) => props.bgColor || '#000'};
    color: ${(props) => props.textColor || '#fff'};
    width: ${(props) => props.width || 'auto'};
    border: none;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
`;
