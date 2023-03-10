import styled from "styled-components";
import { pSBC, hexToRgba } from "../utils";

const NameStyle = styled.div`
  .name-wrapper {
    position: absolute;
    left: ${props => props.theme.spacing.lgSpace};
    top: ${props => props.theme.spacing.lgSpace};
    margin: 0;
    padding: 0;

    h1 {
      margin: 0;
      padding: 3px 5px;
      position: fixed;
      z-index: 401;
      background: ${props => hexToRgba(props.theme.colors.bg, 0.7)};
    }
  }

  .name-info {
    margin: 28px 0 0 5px;
    position: relative;
    z-index: 401;

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.mobile}px) {
      margin: 32px 0 0 6px;
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.tablet}px) {
      margin: 36px 0 0 7px;
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.desktop}px) {
      margin: 42px 0 0 8px;
    }
  }

  .name-insta-svg {
    width: 23px;
    fill: ${props => props.theme.colors.fg};
    transform: translateX(0);
    transition: all 0.2s;
    opacity: 0.9;
  }

  .name-instagram {
    margin: ${props => props.theme.spacing.xlSpace} 0 0
      ${props => props.theme.spacing.mdSpace};
    display: block;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &:hover {
      .name-arrow {
        margin: 0 10px 0 0;
      }

      .name-top {
        width: 8px;
        transform: rotate(40deg) translate(-2px, -1px);
        transition: all 0.2s;
      }
      .name-shaft {
        width: 40px;
        transition: all 0.2s;
      }
      .name-bottom {
        width: 8px;
        transform: rotate(-40deg) translate(-2px, 1px);
        transition: all 0.2s;
      }
    }
  }

  .name-arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 21px;
    margin: 0;
  }

  .name-top {
    width: 0;
    height: 1px;
    transform: rotate(0);
    transition: all 0.2s;
    background: ${props => props.theme.colors.fg};
    opacity: 0.7;
  }

  .name-shaft {
    width: 0;
    height: 1px;
    background: ${props => props.theme.colors.fg};
    transition: all 0.2s;
    opacity: 0.7;
  }

  .name-bottom {
    width: 0;
    height: 1px;
    transform: rotate(0);
    transition: all 0.2s;
    background: ${props => props.theme.colors.fg};
    opacity: 0.7;
  }

  .name-link-button {
    width: 25px;
    margin: ${props => props.theme.spacing.lgSpace} 0 0
      ${props => props.theme.spacing.smSpace};
    cursor: pointer;
  }

  .name-link-svg {
    width: 100%;
    fill: ${props => props.theme.colors.fg};
  }

  .name-links-container {
    position: relative;
    z-index: 401;
    top: auto;
    left: auto;

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.mobile}px) {
      position: absolute;
      top: -9px;
      left: 250px;
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.tablet}px) {
      left: 280px;
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.desktop}px) {
      left: 320px;
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.jumbo}px) {
      left: 390px;
    }
  }

  .name-links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    left: 30px;
    top: -26px;
  }

  .name-link {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &:hover {
      .name-link-arrow {
        margin: 0 10px 0 0;
      }
      .name-link-top {
        width: 8px;
        transform: rotate(40deg) translate(-2px, -1px);
        transition: all 0.2s;
      }
      .name-link-shaft {
        width: 40px;
        transition: all 0.2s;
      }
      .name-link-bottom {
        width: 8px;
        transform: rotate(-40deg) translate(-2px, 1px);
        transition: all 0.2s;
      }
    }
  }

  .name-link-text {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.fg};
    font-size: 16px;
    margin: 0;
    padding: 2px 0;
    opacity: 0.7;
  }

  .name-link-arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 21px;
    margin: 0;
  }

  .name-link-top {
    width: 0;
    height: 1px;
    transform: rotate(0);
    transition: all 0.2s;
    background: ${props => props.theme.colors.fg};
    opacity: 0.7;
  }

  .name-link-shaft {
    width: 0;
    height: 1px;
    background: ${props => props.theme.colors.fg};
    transition: all 0.2s;
    opacity: 0.7;
  }

  .name-link-bottom {
    width: 0;
    height: 1px;
    transform: rotate(0);
    transition: all 0.2s;
    background: ${props => props.theme.colors.fg};
    opacity: 0.7;
  }
`;

export default NameStyle;
