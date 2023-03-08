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

  .artwork-title {
    font-size: 10px;
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
`;

export default ArtworkStyle;
