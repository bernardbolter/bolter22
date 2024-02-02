import styled from "styled-components";
import { hexToRgba } from "../utils";

const ArtStyle = styled.div`
  .art-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.bg};
  }

  .art-name {
    cursor: pointer;
    position: fixed;
    z-index: 601;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      padding: 7px 10px;
      margin: 0;
      background: ${props => hexToRgba(props.theme.colors.bg, 0.5)};
    }

    svg {
      width: 70px;
      height: 29px;
      fill: ${props => hexToRgba(props.theme.colors.fg, 0.9)};
      padding: 7px 10px;
      margin: 5px 0 0;
      background: ${props => hexToRgba(props.theme.colors.bg, 0.5)};
      border-radius: 3px;
    }
  }

  .artwork-full-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: relative;
      cursor: pointer;
    }
  }

  .detail-container {
    display: block;
    width: auto;
    background: ${props => hexToRgba(props.theme.colors.bg, 0.8)};
    position: absolute;
    bottom: 30px;
    left: 30px;
    cursor: pointer;
    padding: 20px;

    h1 {
      font-size: 13px;
      margin: 0;
    }

    h2 {
      font-size: 11px;
      line-height: 15px;
      font-weight: 200;
      margin: 0;
      text-align: left;
    }

    .detail-box {
      width: 15px;
      height: 15px;
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
  }

  .art-enlarge {
    position: fixed;
    bottom: 0;
    right: 0;
    cursor: pointer;

    svg {
      width: 75px;
      height: 75px;
      fill: ${props => hexToRgba(props.theme.colors.fg, 0.9)};
      position: relative;
      z-index: 603;
    }
  }

  .art-enlarge-back {
    background: ${props => hexToRgba(props.theme.colors.bg, 0.5)};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    position: absolute;
    z-index: 601;
    left: 9px;
    top: 1px;
  }
`;

export default ArtStyle;
