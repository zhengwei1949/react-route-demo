import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/AppContainer'
import About from './modules/AboutContainer'
import Repos from './modules/ReposContainer'
import { IndexRoute } from 'react-router'

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
                </Route>
            </Router>
        );
    }
}