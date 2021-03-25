import { FC } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NAVBAR_COMPONENT_STYLE from '../styles/components/navbar'

interface I_NAVBAR_PROPS {
  order: number;
}

const NAVBAR: FC<I_NAVBAR_PROPS> = props => {
  function getLinkClassValue (position: number): string {
    const DEFAULT_VALUE = 'navbar__step'
    const ACTIVE_VALUE = 'navbar__step--active'
    let newClassValue = DEFAULT_VALUE
    newClassValue += (position <= props.order) ? ` ${ACTIVE_VALUE}` : ''
    return newClassValue
  }

  return (
        <NAVBAR_COMPONENT_STYLE>
            <div className="navbar">
                <Link className={getLinkClassValue(0)} to="/home">
                  Home
                </Link>
                <Link className={getLinkClassValue(1)} to="/template">
                  Template
                </Link>
                <Link className={getLinkClassValue(2)} to="/edit">
                  Edit
                </Link>
                <Link className={getLinkClassValue(3)} to="/convert">
                  Convert
                </Link>
            </div>
        </NAVBAR_COMPONENT_STYLE>
  )
}

NAVBAR.propTypes = {
  order: PropTypes.number.isRequired
}

export default NAVBAR
