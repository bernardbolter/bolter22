import styled from "styled-components";
import { generateResponsiveTextCss } from "../helpers/themeHelp";

const ThemeStyle = styled.div`
  ${props => {
    // console.log(props)
    let responsiveCss = "";

    responsiveCss += generateResponsiveTextCss(
      props.theme.title,
      props.theme.breakpoints,
      "h1, .title"
    );
    responsiveCss += generateResponsiveTextCss(
      props.theme.headline,
      props.theme.breakpoints,
      "h2, .headline"
    );
    responsiveCss += generateResponsiveTextCss(
      props.theme.tagline,
      props.theme.breakpoints,
      "h3, .tagline"
    );
    responsiveCss += generateResponsiveTextCss(
      props.theme.lgText,
      props.theme.breakpoints,
      "h4, .lgText"
    );
    responsiveCss += generateResponsiveTextCss(
      props.theme.mdText,
      props.theme.breakpoints,
      "h5, .mdText"
    );
    responsiveCss += generateResponsiveTextCss(
      props.theme.smText,
      props.theme.breakpoints,
      "p, .smText"
    );
    responsiveCss += generateResponsiveTextCss(
      props.theme.navText,
      props.theme.breakpoints,
      ".nav-text"
    );
    responsiveCss += generateResponsiveTextCss(
      props.theme.link,
      props.theme.breakpoints,
      "a, .link"
    );

    console.log(responsiveCss);

    return responsiveCss;
  }}
`;

export default ThemeStyle;
