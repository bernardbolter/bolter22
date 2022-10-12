import { css } from 'styled-components'

const generateResponsiveTextCss = (props, breakpoints, selectors) => {

    if (!props) {
        return css``
    }

    let cssCode = `${selectors} {`

    if (props.default) {
        cssCode += `${generateTextCss(props.default, props.default)}`
    }

    if (breakpoints.mobile && props.mobile) {
        cssCode += `
        @media only screen and (min-width: ${breakpoints.mobile}px) {
            ${generateTextCss(props.mobile, props.default)}
        }
        `
    }

    if (breakpoints.tablet && props.tablet) {
        cssCode += `
        @media only screen and (min-width: ${breakpoints.tablet}px) {
            ${generateTextCss(props.tablet, props.default)}
        }
        `
    }

    if (breakpoints.desktop && props.desktop) {
        cssCode += `
        @media only screen and (min-width: ${breakpoints.desktop}px) {
            ${generateTextCss(props.desktop, props.default)}
        }
        `
    }

    if (breakpoints.jumbo && props.jumbo) {
        cssCode += `
        @media only screen and (min-width: ${breakpoints.jumbo}px) {
            ${generateTextCss(props.jumbo, props.default)}
        }
        `
    }

    cssCode += `}`

    return css`${cssCode}`
}

const generateTextCss = (props, defaultProps) => {
  if (!props || !defaultProps) {
    return ""
  }
  
  return `
    font-family: ${props.fontFamily || defaultProps.fontFamily};
    font-size: ${props.fontSize || defaultProps.fontSize};
    line-height: ${props.lineHeight || defaultProps.lineHeight};
    margin: ${props.margin || defaultProps.margin};
    color: ${props.color || defaultProps.color};
  `
}

export { generateResponsiveTextCss, generateTextCss }