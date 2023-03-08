import styled from "styled-components";

const LayoutStyle = styled.div`
  .layout-wrapper {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
  }

  .top-fade-background {
    width: 75px;
    height: 85px;
    position: fixed;
    z-index: 299;
    top: 0;
    right: 0;
    background: rgba(240, 240, 240, 0.75);
  }

  .top-fade-gradient {
    width: 100%;
    background: linear-gradient(
      to top,
      transparent,
      ${props => props.theme.colors.bg}
    );
    height: 40px;
  }

  .layout-background {
    background: ${props => props.theme.colors.bg};
    z-index: -2;
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
  }

  .bottom-fade {
    width: 100%;
    position: fixed;
    z-index: 299;
    bottom: 0;
    left: 0;
    mix-blend-mode: lighten;
  }

  .bottom-fade-background {
    width: 100%;
    background-color: ${props => props.theme.colors.bg};
    height: 80px;
    opacity: 0.4;
  }

  .bottom-fade-gradient {
    width: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${props => props.theme.colors.bg}
    );
    height: 40px;
  }
`;

export default LayoutStyle;
