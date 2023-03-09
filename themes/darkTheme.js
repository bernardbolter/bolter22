import { pSBC } from "../utils";

const breakpoints = {
  mobile: 550,
  tablet: 768,
  desktop: 1201,
  jumbo: 1451,
};

const colors = {
  bg: "#343434",
  fg: "#dcdcdc",
  warning: "#ffcccb",
  sale: "#DAA520",
  war: "#6D2E46",
  ach: "#9DC3C2",
  meg: "#FC7753",
  dcs: "#F6BD60",
  col: "#99C2A2",
  van: "#7B8CDE",
  og: "#395B0E",
  ins: "#A27E8E",
  pho: "#2D4654",
  vid: "#996a3e",
};

const fonts = {
  header: '"Barlow Semi", sans-serif',
  body: '"Barlow Semi", sans-serif',
};

const spacing = {
  smSpace: "1px",
  mdSpace: "3px",
  lgSpace: "7px",
  xlSpace: "14px",
  xxlSpace: "28px",
};

const darkTheme = {
  name: "dark",
  breakpoints: breakpoints,
  colors: colors,
  fonts: fonts,
  spacing: spacing,
  // h1
  title: {
    default: {
      fontFamily: fonts.header,
      fontWeight: "800",
      fontSize: "18px",
      lineHeight: "22px",
      color: colors.fg,
    },
    mobile: {
      fontSize: "20px",
      lineHeight: "24px",
    },
    tablet: {
      fontSize: "24px",
      lineHeight: "28px",
    },
    desktop: {
      fontSize: "28px",
      lineHeight: "32px",
    },
    jumbo: {
      fontSize: "34px",
      lineHeight: "40px",
    },
  },
  // h2
  headline: {
    default: {
      fontFamily: fonts.header,
      fontWeight: "800",
      fontSize: "16px",
      lineHeight: "20px",
      color: pSBC(0.1, colors.fg),
    },
  },
  // h3
  tagline: {
    default: {
      fontFamily: fonts.body,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "20px",
      color: pSBC(0.2, colors.fg),
    },
  },
  // h4
  lgText: {
    default: {
      fontFamily: fonts.body,
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "18px",
      color: pSBC(0.2, colors.fg),
    },
  },
  // h5
  mdText: {
    default: {
      fontFamily: fonts.body,
      fontWeight: "200",
      fontSize: "11px",
      lineHeight: "15px",
      margin: "0px",
      padding: "0px",
      color: pSBC(0.2, colors.fg),
    },
  },
  // p
  smText: {
    default: {
      fontFamily: fonts.body,
      fontWeight: "200",
      fontSize: "11px",
      lineHeight: "14px",
      color: pSBC(0.4, colors.fg),
    },
  },
  navLink: {
    default: {},
  },
  navText: {
    default: {
      fontFamily: fonts.body,
      fontWeight: "200",
      fontSize: "16px",
      lineHeight: "16px",
      margin: "0",
      padding: "3px 12px 6px 0",
      textDecoration: "none",
      cursor: "pointer",
      color: pSBC(0.25, colors.fg),
    },
    mobile: {
      fontSize: "12px",
      padding: "3px 12px 3px 0",
    },
  },
};

export default darkTheme;
