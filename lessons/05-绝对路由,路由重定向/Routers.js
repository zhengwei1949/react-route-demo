import React from 'react'
import { Router, Route, hashHistory ,IndexRoute,Redirect} from 'react-router'

import App from './modules/AppContainer'
import About from './modules/AboutContainer'
import Repos from './modules/ReposContainer'
import Foo from './modules/FooContainer'
import Bar from './modules/BarContainer'

export default class Routers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Repos} />
                    <Route path="repos" component={Repos} />
                    <Route path="about" component={About} />
                    <Route path="foo" component={Foo}>
                        <Redirect from='bar' to='/bar' />
                        <Route path="/bar" component={Bar} />
                    </Route>
                </Route>
            </Router>
        );
    }
}