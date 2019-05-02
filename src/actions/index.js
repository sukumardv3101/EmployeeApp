import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as types from '../constants';
import { say, pass, EmployeeData, UserCredentials } from '../config/data';

let responseData;

export const getEmployeeData = () => (dispatch) => {
    dispatch(say(types.IS_LOADING_EMPLOYEE_DATA));

    setTimeout(() => {
        dispatch(pass(types.GET_EMPLOYEE_DATA,EmployeeData));
    },2000);
};

export const clearEmpData = () => (dispatch) => {
    dispatch(say(types.CLEAR_GET_EMPLOYEE_DATA));
};

export const loginValidate = (props) => (dispatch) => {
    dispatch(say(types.IS_VALIDATING_LOGIN));

    setTimeout(() => {
        if(props.username !== UserCredentials.username){
            responseData = {
                message : 'User does not Exist',
            };
            dispatch(pass(types.FAILED_TO_VALIDATE_LOGIN_DATA,responseData));
        } else if (props.password !== UserCredentials.password) {
            responseData = {
                message : 'User does not Exist',
            };
            dispatch(pass(types.FAILED_TO_VALIDATE_LOGIN_DATA,responseData));
        } else {
            responseData = {
                message : 'Successfully logged in.',
            };
            AsyncStorage.setItem('user_success_token',`${props.password}$success`)
            dispatch(pass(types.VALIDATE_LOGIN_DATA,responseData));
            Actions.Home();
        }
    },2000);
};

export const clearLoginData = () => (dispatch) => {
    dispatch(say(types.CLEAR_LOGIN_DATA));
};