import styled from 'styled-components'

const SwitchModeStyle = styled.div`
    .switchmode-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

        input {
            display: none;
        }

        span {
            width: 20px;
            height: 20px;
            border-radius: 10px;
            display: block;
            background: ${props => props.theme.colors.fgAccent};
        }

        .light {
            color: ${props => props.theme.colors.fgSub}
        }

        .dark {
            color: ${props => props.theme.colors.fgSub}
        }

        p {
            font-size: 12px;
            font-weight: 600;
        }
    }
`

export default SwitchModeStyle