import styled from "styled-components";

const StatementStyle = styled.div`
  .statement-container {
    display: block;
  }

  .statement-back {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 30px;
    transform: rotate(180deg);
    cursor: pointer;

    svg {
      width: 100%;
    }
  }

  .statement-content {
    margin: 100px 5% 150px;
    max-width: 800px;

    h6 {
      font-size: 18px;
      line-height: 23px;
      opacity: 0.7;
    }

    h5 {
      font-size: 18px;
      line-height: 23px;
      opacity: 0.7;
    }

    p {
      color: black;
      opacity: 0.6;
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

export default StatementStyle;
