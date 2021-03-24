import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import ROUTES from './app/routes'

ReactDOM.render(
    <StrictMode>
        <ROUTES />
    </StrictMode>,
    document.getElementById('root')
)
