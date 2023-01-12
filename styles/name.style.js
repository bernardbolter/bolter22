import styled from "styled-components";
import { pSBC } from "../utils";

const NameStyle = styled.div`
  .name-wrapper {
    position: fixed;
    left: ${props => props.theme.spacing.lgSpace};
    top: ${props => props.theme.spacing.lgSpace};
    margin: 0;
    padding: 0;
  }

  .name-info {
    margin: ${props => props.theme.spacing.lgSpace} 0 0
      ${props => props.theme.spacing.smSpace};
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
