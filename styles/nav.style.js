import styled from "styled-components";
import { pSBC } from "../utils";

const NavStyle = styled.div`
  .nav-container {
    z-index: 500;
    position: fixed;
    top: 0;
    right: 0;
  }

  .filter-text {
    color: $medium;
    font-family: $font-thick;
    font-size: 8.5px;
    top: 55px;
    right: 3px;
    position: fixed;
    text-transform: uppercase;
  }

  .nav-background {
    background: ${props => pSBC(0.2, props.theme.colors.bg)}
    opacity: 0.9;
    position: fixed;
  }

  .box-click {
    display: block;
    position: fixed;
    z-index: 501;
    right: 10px;
    top: 10px;
    width: 50px;
    height: 50px;
    background: transparent;
    cursor: pointer;
  }

  .box-click-hide {
    display: none;
  }

  .box {
    width: 10px;
    height: 10px;
    border-radius: 1px;
    opacity: 0.8;
    position: fixed;
  }

  .box-on {
    border-radius: 5px;
    opacity: 1;
  }

  .minimize {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    opacity: 0.8;
    transition: opacity 0.5s ease-in-out;

    &:hover {
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      svg {
        width: 75px;
        height: 75px;
      }
    }

    svg {
      fill: ${props => pSBC(0.2, props.theme.colors.fg)};
      width: 50px;
      height: 50px;
    }
  }

  .search-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 500;
    top: 5px;
    right: 0;
  }

  .nav-links {
    position: fixed;
    top: 115px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .by {
    font-weight: 400;
    color: ${props => pSBC(0.2, props.theme.colors.fg)}
    font-size: 11px;
    margin: 15px 20px 5px 0;
    padding: 0;
    height: 9px;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 9px;
      height: 9px;
    }
  }

  .slug {
    font-weight: 200;
    color: ${props => props.theme.colors.fg};
    font-size: 16px;
    margin: 0;
    padding: 3px 12px 20px 0;
    cursor: pointer;
    transition: all 0.2s ease;
    height: 21px;

    @media only screen and (min-width: ${props =>
      props.theme.breakpoints.mobile}) {
      font-size: 12px;
      padding: 3px 12px 3px 0;
    }

    &:hover {
      color: black;
      transition: all 0.2s ease;
    }
  }

  .spin {
    width: 100%;
    fill: ${props => pSBC(0.2, props.theme.colors.fg)}
    overflow: visible;
  }

  .for-sale {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 4px 12px 0 0;
  }

  .clear {
    margin: 14px -10px 0 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    p {
      color: ${props => pSBC(0.2, props.theme.colors.fg)}
      font-size: 14px;
      white-space: nowrap;
      margin: 0 5px 0 0;
      opacity: 0.8;
      transition: opacity 0.5s ease-in-out;

      @media only screen and (min-width: ${props =>
        props.theme.breakpoints.mobile}) {
        font-size: 11px;
      }

      &:hover {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
      }
    }

    svg {
      width: 25px;
      height: 25px;
      overflow: visible;
      fill: ${props => props.theme.colors.warning};

      @media only screen and (min-width: ${props =>
        props.theme.breakpoints.mobile}) {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default NavStyle;
