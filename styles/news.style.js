import styled from 'styled-components'
import { pSBC } from '../utils'

const NewsStyle = styled.div`
    .news-wrapper {
        z-index: 600;
        position: fixed;
        right: 0;
        bottom: 0;

        .news-form {
            display: flex;
            flex-direction: row;
            jusrify-content: flex-end;
            align-items: center;
        }

        input {
            background: transparent;
            border-left: none;
            border-top: none;
            border-right: none;
            border-bottom: ${props => props.theme.spacing.smSpace} solid ${props => props.theme.colors.fg};
            font-size: 16px;
            margin: ${props => props.theme.spacing.lgSpace};
            padding: ${props => props.theme.spacing.mdSpace};
            outline: none;
            width: 150px;
        }

        button {
            width: 60px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${props => pSBC(0.2, props.theme.colors.fg)};
            color: ${props => props.theme.colors.bg};
            font-size: 12px;
            border: none;
            cursor: pointer;
        }
    }
`

export default NewsStyle