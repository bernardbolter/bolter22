import styled from "styled-components";
import { pSBC } from "../utils";

const NavItemStyle = styled.div`
  .nav-text {
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: ${props => props.theme.colors.fg};
      transition: all 0.2s ease;
    }
  }

  .sort-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: ${props => pSBC(0.2, props.theme.colors.fg)};
    position: absolute;
    margin: 3px 0 0 10px;

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.mobile}) {
      margin: 3px 0 0 10px;
    }
  }
`;

export default NavItemStyle;
