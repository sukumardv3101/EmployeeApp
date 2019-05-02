import React, {Component} from 'react';
import { Provider } from 'react-redux';

// App Routes
import AppRouter from './src/routes';
// Store file
import configureStore from './src/store';
const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
    }
}
