import styled from 'styled-components'

const SwitchModeStyle = styled.div`
    .switchmode-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;

        input {
            display: none;
        }

        span {
            width: 20px;
            height: 20px;
            border-radius: 10px;
            display: block;
            background: ${props => props.theme.colors.bgAccent};
        }

        p {
            color: ${props => props.theme.colors.fgAccent};
            font-size: 20px;
            font-weight
        }
    }
`

export default SwitchModeStyle