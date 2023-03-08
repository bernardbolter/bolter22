import styled from "styled-components";

const ArtworksStyle = styled.div`
  .artworks-container {
    z-index: 1;
    position: relative;
    padding: 120px 0px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.mobile}px) {
      padding: 80px 0px;
    }
  }
`;

export default ArtworksStyle;
