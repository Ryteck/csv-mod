import { Link } from 'react-router-dom'
import NAVBAR_COMPONENT_STYLE from '../styles/components/navbar'

const NAVBAR = () => {
  return (
        <NAVBAR_COMPONENT_STYLE>
            <div className="navbar">
                <Link className="navbar__step navbar__step--active" to="/home">
                  Home
                </Link>
                <Link className="navbar__step" to="/template">
                  Template
                </Link>
                <Link className="navbar__step" to="/edit">
                  Edit
                </Link>
                <Link className="navbar__step" to="/convert">
                  Convert
                </Link>
            </div>
        </NAVBAR_COMPONENT_STYLE>
  )
}

export default NAVBAR
