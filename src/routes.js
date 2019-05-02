import React, { Component } from 'react';
import {
    Router,
    Scene,
} from 'react-native-router-flux';

import Login from './containers/login';
import Home from './containers/home';

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Login" component={Login} hideNavBar initial/>
                    <Scene key="Home" title="Employee App" component={Home} hideNavBar={false} type='reset' />
                </Scene>
            </Router>
        );
    }
}
