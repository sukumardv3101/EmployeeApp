import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import appReducers from './reducers/';

const initialMiddleware = [];
initialMiddleware.push(thunk);

let middleware = compose(applyMiddleware(...initialMiddleware));

export default configureStore = () => {
    let store = createStore(appReducers,middleware);

    return store;
}