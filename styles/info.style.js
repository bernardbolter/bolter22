import styled from "styled-components";
import { pSBC } from "../utils";

const InfoStyle = styled.div`
  .info-wrapper {
    position: absolute;
    z-index: 300;
    left: auto;
    bottom: auto;
    right: 10px;
    top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 220px;
    margin: 0;
    border-bottom: none;

    @media only screen and (min-width: 410px) {
      top: 100px;
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.mobile}px) {
      left: 0;
      bottom: 0;
      right: auto;
      top: auto;
      width: calc(100% - (${props => props.theme.spacing.xlSpace} * 2));
      max-width: 320px;
      margin: ${props => props.theme.spacing.xlSpace}
        ${props => props.theme.spacing.xlSpace} 55px;
      border-bottom: 1px solid ${props => pSBC(0.5, props.theme.colors.fg)};
      border-bottom: none;
      flex-direction: column;
      margin: 0 0 10px 10px;
      align-items: flex-start;
      position: fixed;
    }

    .info-link {
      color: ${props => pSBC(0.2, props.theme.colors.fg)};
      font-size: 16px;
      text-decoration: none;
      margin: ${props => props.theme.spacing.lgSpace} 10px;
      padding: 5px 0;
      position: relative;
      transition: all 0.35s ease;
      position: relative;
      z-index: 251;
    }

    .info-link:hover {
      color: ${props => props.theme.colors.fg};
      transition: all 0.35s ease;
    }

    .info-link::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${props => pSBC(0.4, props.theme.colors.fg)};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    .info-link:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export default InfoStyle;
