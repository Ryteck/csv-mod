import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HOME_PAGE from '../pages/home'
import SELECT_PAGE from '../pages/select'
import TEMPLATE_PAGE from '../pages/template'
import EXPORT_PAGE from '../pages/export'
import NOT_FOUND_PAGE from '../pages/not_found'

const REDIRECT_TO_HOME = () => <Redirect to="/home" />

const ROUTES = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route component={REDIRECT_TO_HOME} path="/" exact />
            <Route component={HOME_PAGE} path="/home" exact />
            <Route component={SELECT_PAGE} path="/select" exact />
            <Route component={TEMPLATE_PAGE} path="/template" exact />
            <Route component={EXPORT_PAGE} path="/export" exact />

            <Route component={NOT_FOUND_PAGE} />
        </Switch>
    </BrowserRouter>
  )
}

export default ROUTES
