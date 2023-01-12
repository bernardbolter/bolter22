import styled from "styled-components";
import { pSBC } from "../utils";

const SwitchModeStyle = styled.div`
  .switchmode-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: -10px;
  }

  .switchmode {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 5px;

    input {
      display: none;
    }

    span {
      width: 15px;
      height: 15px;
      border-radius: 7.5px;
      display: block;
      background: ${props => props.theme.colors.fg};
    }

    .light {
      color: ${props => props.theme.colors.fg};
      margin-right: 5px;
    }

    .dark {
      color: ${props => pSBC(0.4, props.theme.colors.fg)};
      margin-left: 5px;
    }

    p {
      font-size: 12px;
      font-weight: 600;
    }

    svg {
      fill: ${props => props.theme.colors.fg};
      stroke: ${props => props.theme.colors.fg};
      width: 20px;
      height: 20px;
    }
  }

  .random-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;

    svg {
      width: 30px;
      height: 30px;
      fill: ${props => pSBC(0.2, props.theme.colors.fg)};
      margin-top: -2px;
    }

    p {
      padding: 0;
      margin: 3px 0 0;
      font-size: 12px;
      color: ${props => pSBC(0.2, props.theme.colors.fg)};
    }
  }
`;

export default SwitchModeStyle;
