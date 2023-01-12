import styled from 'styled-components'

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
`

export default LayoutStyle
