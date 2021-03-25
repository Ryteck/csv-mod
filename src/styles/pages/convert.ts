import styled from 'styled-components'

const CONVERT_PAGE_STYLE = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

    .container {
        display: flex;
        align-items: center;
        justify-content: center;

        &__option {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        &__title {
            font-size: 40px;
            font-weight: 500;
        }

        &__icon {
            margin: 5px 20px;
            outline: none;
            border-radius: 24px;
            border: solid 2px #008ac5;
            padding: 50px 50px;
            cursor: pointer;
            transition: 0.25s;
            box-shadow: 0 0 5px 2px #008ac5, inset 0 0 5px 2px #008ac5;
            height: 100%;

            :hover {
                background-color: #008ac5;
                box-shadow: 0 0 100px 2px #008ac5, inset 0 0 5px 2px #008ac5;
            }
        }
    }

    .progress {
        padding: 20px;

        &__bar {
            
        }
    }
`

export default CONVERT_PAGE_STYLE
