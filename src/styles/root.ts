import { createGlobalStyle } from 'styled-components'

const ROOT_STYLE = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;

        main {
            flex: 1;
        }
    }
`

export default ROOT_STYLE
