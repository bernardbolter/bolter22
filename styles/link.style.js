import styled from "styled-components";

const LinkStyle = styled.div`
  .link-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.bg};

    h1 {
      font-size: 20px;
      color: ${props => props.theme.colors.fg};
    }
  }
`;

export default LinkStyle;
