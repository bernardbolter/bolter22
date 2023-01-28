import { pSBC } from "../utils";

const randomColor = (min, max) => {
  var color = function () {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return `rgb(${color()},${color()}, ${color()})`;
};

const fonts = {
  header: '"Barlow Semi", sans-serif',
  body: '"Barlow Semi", sans-serif',
};

export const randomTheme = mode => {
  console.log(mode);
  const colors = {
    bg: mode === "light" ? randomColor(235, 255) : randomColor(10, 30),
    fg: mode === "light" ? randomColor(10, 30) : randomColor(235, 255),
    warning: "#d11a2a",
  };

  //   colors.foreground = randomColor(100, 200);
  const spacing = {
    smSpace: "1px",
    mdSpace: "3px",
    lgSpace: "7px",
    xlSpace: "14px",
    xxlSpace: "28px",
  };

  const breakpoints = {
    mobile: 550,
    tablet: 768,
    desktop: 1201,
    jumbo: 1451,
  };

  const fonts = {
    header: '"Barlow Semi", sans-serif',
    body: '"Barlow Semi", sans-serif',
  };

  return {
    name: "light",
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
      mobile: {
        fontSize: "12px",
        lineHeight: "16px",
      },
      tablet: {
        fontSize: "13px",
        lineHeight: "17px",
      },
      desktop: {
        fontSize: "14px",
        lineHeight: "19px",
      },
      jumbo: {
        fontSize: "16px",
        lineHeight: "22px",
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
};

export default randomTheme;
