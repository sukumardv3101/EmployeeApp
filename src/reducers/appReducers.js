import * as types from '../constants';

const InitialState = {
    isLoading: false,
    data: null,
    hasData: false,
    error: false,
	notification: null
};

export function loginReducer(state = InitialState, action = null) {
    switch (action.type) {
        case types.IS_VALIDATING_LOGIN:
            return { 
                ...state, 
                isLoading: true, 
                notification: 'loading...' 
            };
        case types.VALIDATE_LOGIN_DATA:
            return { 
                ...state, 
                isLoading: false, 
                hasData: true, 
                data: action.payload, 
                error: false, 
                notification: 'Login Success' 
            };
        case types.FAILED_TO_VALIDATE_LOGIN_DATA:
            return { 
                ...state, 
                isLoading: false, 
                error: true, 
                data: action.payload, 
                notification: 'Login failed' 
            };
        case types.CLEAR_LOGIN_DATA:
            return { 
                ...state, 
                isLoading: false, 
                data: null, 
                hasData: false, 
                error: false, 
                notification: 'Data Cleared' 
            };
        default:
            return state;
    }
}

export function employeeDataReducer(state = InitialState, action = null) {
    switch(action.type){
        case types.IS_LOADING_EMPLOYEE_DATA:
            return {
                ...state, 
                isLoading: true, 
                notification: 'loading...' 
            };
        case types.GET_EMPLOYEE_DATA:
            return {
                ...state, 
                isLoading: false, 
                hasData: true, 
                data: action.payload, 
                error: false, 
                notification: 'Added data to list' 
            };
        case types.FAILED_TO_GET_EMPLOYEE_DATA:
            return {
                ...state, 
                isLoading: false, 
                error: true, 
                hasData:false,
                data: action.payload, 
                notification: 'Login failed' 
            };
        case types.CLEAR_GET_EMPLOYEE_DATA:
            return {
                ...state, 
                isLoading: false, 
                data: null, 
                hasData: false, 
                error: false, 
                notification: 'Data Cleared' 
            };
        default:
            return state;
    }
}