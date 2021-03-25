import styled from 'styled-components'
import notFoundFont from '../../resources/img/not_found_font.jpg'

const NOT_FOUND_PAGE_STYLE = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__title {
            font-size: 300px;
            margin: 0;
            font-weight: 900;
            letter-spacing: 20px;
            background: url(${notFoundFont}) center no-repeat;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
        }

        &__desc {
            margin: 50px;
            font-size: 30px;
        }

        &__back {
            color: #ffffff;
            background: none;
            text-align: center;
            height: 40px;
            border-radius: 20px;
            border: solid 2px;
            outline: none;
            transition: 0.25s;
            width: 200px;
            border-color: #009d4a;
            box-shadow: 0 0 2px #009d4a;
            cursor: pointer;
            :hover {
                width: 225px;
                border-color: #0aff52;
                box-shadow: 0 0 100px #0aff52;
                background-color: #0aff52;
            }
        }
    }
`

export default NOT_FOUND_PAGE_STYLE
