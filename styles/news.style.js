import styled from "styled-components";
import { pSBC } from "../utils";

const NewsStyle = styled.div`
  .news-wrapper {
    z-index: 600;
    position: fixed;
    right: 4%;
    bottom: 10px;
    width: 93%;
    max-width: 320px;

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.mobile}px) {
      right: 15px;
    }

    .news-form {
      display: flex;
      flex-direction: row;
      jusrify-content: flex-end;
      align-items: center;
      background: rgba(240, 240, 240, 0.9);
      padding: 6px;
    }

    input {
      background: transparent;
      border-left: none;
      border-top: none;
      border-right: none;
      border-bottom: ${props => props.theme.spacing.smSpace} solid
        ${props => props.theme.colors.fg};
      font-size: 16px;
      margin: ${props => props.theme.spacing.lgSpace};
      padding: ${props => props.theme.spacing.mdSpace};
      outline: none;
      width: 100%;
    }

    button {
      width: 60px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${props => pSBC(0.2, props.theme.colors.fg)};
      color: ${props => props.theme.colors.bg};
      font-size: 12px;
      border: none;
      cursor: pointer;
    }
  }
`;

export default NewsStyle;
