import styled from 'styled-components';
import {colors} from '../style';

export const Button = styled.button`
    color: ${colors.textOnPrimary};
    background: ${colors.primary};
    border: none;
    border-radius: 5px;
    :hover {
        background: ${colors.primaryDark};
    };
    outline: none;
`;
