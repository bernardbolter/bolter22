import styled from "styled-components";
import { pSBC } from "../utils";

const SearchStyle = styled.div`
.search-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 0 10px 0 0;

    input {
        border: 1px solid ${props => pSBC(0.4, props.theme.colors.fg)};
        margin: 0 7px 0 0;
        padding: 3px 5px;
        width: 150px;
        color: ${props => pSBC(0.4, props.theme.colors.fg)};

        @media only screen and (min-width: ${props =>
          props.theme.breakpoints.mobile}) {
            width: 150px;
        }
    }

    input::placeholder {
        color: ${props => pSBC(0.4, props.theme.colors.fg)};
        font-size: 10px;
    }

    input:focus {
        color: ${props => pSBC(0.2, props.theme.colors.fg)};
        outline: none;
    }

    svg {
        width: 25px;
        height: 25px;
        margin: 3px 0 0 0;
        cursor: pointer;

        @media only screen and (min-width: ${props =>
          props.theme.breakpoints.mobile}) {
            width: 20px;
            height: 20px;
        }
    }
`;

export default SearchStyle;
