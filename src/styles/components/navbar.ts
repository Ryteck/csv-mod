import styled from 'styled-components'

const NAVBAR_COMPONENT_STYLE = styled.nav`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;

    .navbar {
        text-align: center;
        display: inline-block;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        border-radius: 5px;
        counter-reset: flag;

        &__step {
            text-decoration: none;
            outline: none;
            display: block;
            float: left;
            font-size: 18px;
            line-height: 36px;
            padding: 0 10px 0 60px;
            position: relative;
            background: #ffffff;
            color: #ff004e;
            transition: 0.5s;

            :first-child {
                padding-left: 46px;
                border-radius: 5px 0 0 5px;

                ::before {
                    left: 14px;
                }
            }

            :last-child {
                border-radius: 0 5px 5px 0;
                padding-right: 20px;

                ::after {
                    content: none;
                }
            }

            ::before {
                content: counter(flag);
                counter-increment: flag;
                border-radius: 100%;
                width: 20px;
                height: 20px;
                line-height: 20px;
                margin: 8px 0;
                position: absolute;
                top: 0;
                left: 30px;
                font-weight: bold;
                background: #ffffff;
                box-shadow: 0 0 0 1px #ff004e;
            }

            ::after {
                content: '';
                position: absolute;
                top: 0;
                right: -18px;
                width: 36px;
                height: 36px;
                transform: scale(0.707) rotate(45deg);
                z-index: 1;
                border-radius: 0 5px 0 50px;
                background: #ffffff;
                transition: 0.5s;
                box-shadow: 2px -2px 0 2px #2a2e79;
            }

            &--active, :hover {
                color: #ffffff;
                background: #ff004e;

                ::before {
                    color: #ff004e;
                }

                ::after {
                    color: #ff004e;
                    background: #ff004e;
                }
            }
        }
    }
`

export default NAVBAR_COMPONENT_STYLE
