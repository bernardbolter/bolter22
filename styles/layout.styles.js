import styled from 'styled-components'

const LayoutStyle = styled.div`
    body {
        background: ${props => props.theme.colors.bg};
        color: ${props => props.theme.colors.fg};
    }
    h1 {
        background: ${props => props.theme.colors.bg};
        color: ${props => props.theme.colors.fg};
    }
`

export default LayoutStyle
