import { FC } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

interface I_REDIRECT_COMPONENT_PROPS {
    active: boolean;
    path: string;
}

const REDIRECT_COMPONENT: FC<I_REDIRECT_COMPONENT_PROPS> = props =>
  props.active ? <Redirect to={props.path} /> : null

REDIRECT_COMPONENT.propTypes = {
  active: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
}

export default REDIRECT_COMPONENT
