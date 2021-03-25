import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HOME_PAGE from '../pages/home'
import TEMPLATE_PAGE from '../pages/template'
import EDIT_PAGE from '../pages/edit'
import CONVERT_PAGE from '../pages/convert'
import NOT_FOUND_PAGE from '../pages/notFound'

const REDIRECT_TO_HOME = () => <Redirect to="/home" />

const ROUTES = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route component={REDIRECT_TO_HOME} path="/" exact />
            <Route component={HOME_PAGE} path="/home" exact />
            <Route component={TEMPLATE_PAGE} path="/template" exact />
            <Route component={EDIT_PAGE} path="/edit" exact />
            <Route component={CONVERT_PAGE} path="/convert" exact />

            <Route component={NOT_FOUND_PAGE} />
        </Switch>
    </BrowserRouter>
  )
}

export default ROUTES
