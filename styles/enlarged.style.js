import styled from "styled-components";

const EnlargedStyle = styled.div`
  .enlarged-container {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.bg};
  }

  .enlarged-image {
    position: fixed;
    z-index: 1001;
    overflow: hidden;

    img {
      pointer-events: none;
    }
  }
`;

export default EnlargedStyle;
