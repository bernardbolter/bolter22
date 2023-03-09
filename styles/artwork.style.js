import styled from "styled-components";

const ArtworkStyle = styled.div`
  .artwork-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .artwork-info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    position: absolute;
  }

  .artwork-title-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .artwork-title {
    font-size: 11px;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1;
    margin: 0;
    padding: 0;
  }

  .artwork-title-series-box {
    width: 10px;
    height: 10px;
  }

  .series-box-round {
    border-radius: 5px;
    margin: 0 0 0 5px;
  }
`;

export default ArtworkStyle;
