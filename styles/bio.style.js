import styled from "styled-components";

const BioStyle = styled.div`
  .bio-container {
    display: block;
    overflow: scroll-y;
  }

  .bio-back {
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

  .bio-content {
    margin: 100px 5% 0;
    max-width: 800px;

    p {
      color: black;
      opacity: 0.6;
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

export default BioStyle;
