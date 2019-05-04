import styled from 'styled-components';
import {colors} from '../style';

export const InputTextField = styled.input`
    color: ${colors.blrack};
    background: ${colors.white};
    border: none;
    border-bottom:  1px solid ${colors.gray};
    outline: none;

    :hover {
        border-bottom:  2px solid ${colors.black};
    };

    :focus {
        border-bottom:  2px solid ${colors.primaryDark};
    };
`;
