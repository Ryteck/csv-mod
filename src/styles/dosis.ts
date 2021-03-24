import { createGlobalStyle } from 'styled-components'
import dosis from '../resources/fonts/dosis.ttf'

const DOSIS_STYLE = createGlobalStyle`
    @font-face {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        src: url(${dosis}) format('truetype');
    }

    body {
        font-family: 'Dosis';
        color: #add4fa;
    }
`

export default DOSIS_STYLE
