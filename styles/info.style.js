import styled from 'styled-components'
import { pSBC } from '../utils'

const InfoStyle = styled.div`
    .info-wrapper {
        position: fixed;
        z-index: 400;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - (${props => props.theme.spacing.xlSpace} * 2));
        margin: ${props => props.theme.spacing.xlSpace};

        a {
            color: ${props => pSBC(0.2, props.theme.colors.fg)};
            font-size: 16px;
            text-decoration: none;
            margin: ${props => props.theme.spacing.lgSpace} 0;
            padding: 5px 10px 4px 8px;
            position: relative;
            transition: all .35s ease;
        }
    
        a:hover {
            color: ${props => props.theme.colors.fg};
            transition: all .35s ease;
        }
    
        a::before,
        a::after {
            content: '';
            height: 10px;
            width: 10px;
            position: absolute;
            transition: all .35s ease;
            opacity: 0;
        }
    
        a::before {
            content: '';
            right: 0;
            top: 0;
            border-top: ${props => props.theme.spacing.smSpace} solid ${props => pSBC(0.2, props.theme.colors.fg)};
            border-right: ${props => props.theme.spacing.smSpace} solid ${props => pSBC(0.2, props.theme.colors.fg)};
            transform: translate(-100%, 50%);
        }
    
        a:after {
            content: '';
            left: 0;
            bottom: 0;
            border-bottom: ${props => props.theme.spacing.smSpace} solid ${props => pSBC(0.2, props.theme.colors.fg)};
            border-left: ${props => props.theme.spacing.smSpace} solid ${props => pSBC(0.2, props.theme.colors.fg)};
            transform: translate(100%, -50%)
        }

        @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {

            a:hover:before,
            a:hover:after{
                transform: translate(0,0);
                opacity: 1;
            }
        
            a:hover {
                color: ${props => props.theme.colors.fg};
            }

        }
    }
`

export default InfoStyle