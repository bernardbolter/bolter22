import styled from 'styled-components'
import { generateResponsiveTextCss } from '../helpers/themeHelp'

const LayoutStyle = styled.div`
    .layout-wrapper {
        background: ${props => props.theme.colors.bg};
        z-index: -1;
        position: absolute;
        margin: 0;
        padding: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100vh;

    }
    ${props => {
        let responsiveCss = ''

        responsiveCss += generateResponsiveTextCss(props.theme.title, props.theme.breakpoints, "h1, .title")
        responsiveCss += generateResponsiveTextCss(props.theme.headline, props.theme.breakpoints, "h2, .headline")
        responsiveCss += generateResponsiveTextCss(props.theme.text, props.theme.breakpoints, "p, .text")

        return responsiveCss
    }}
`

export default LayoutStyle
