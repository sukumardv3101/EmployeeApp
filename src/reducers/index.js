import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

// Application reducers
import * as App from './appReducers';

const appReducer = combineReducers({
    form:formReducer,

    login:App.loginReducer,
    employeeData:App.employeeDataReducer,
    
});

export default appReducer;