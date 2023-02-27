import styled from "styled-components";

const CVStyle = styled.div`
  .cv-container {
    display: block;
    margin-top: 100px;
  }

  .cv-back {
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

  .cv-content {
    width: 90%;
    margin: 0 5%;

    h1 {
      margin: 0;
      padding: 20px 0 10px 0;
    }
  }

  .cv-entry {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    h5 {
      margin: 0;
    }

    h4 {
      margin: 0 20px 0 0;
    }

    h3 {
      margin: 0 10px 0 0;
    }

    h2 {
      margin: 0 5px 0 0;
    }

    h2,
    h3,
    h4,
    h5 {
      padding: 0;
      line-height: 1em;
    }
  }
`;

export default CVStyle;
