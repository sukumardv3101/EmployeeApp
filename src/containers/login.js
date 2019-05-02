import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import { Text, View, TextInput, TouchableHighlight, Image } from 'react-native';

import { styles } from './styles/login';
import { loginValidate } from '../actions/';

const imgUrl = 'http://barbeque-ville.com/assets/site/images/user_man-512.png';

class Login extends Component {

    state = {
        username: null,
        userStatus: undefined,
        passwordStatus: undefined,
        password: null,
    }

    async phoneValidation() {
        const { username } = this.state;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        const userStatus = reg.test(username)
            ? undefined
            : 'Please enter a valid user id';

        if (userStatus === undefined) {
            this.passwordInput.focus();
        } else {
            await this.setState({
                userStatus
            });
        }
    }

    async passwordValidation() {
        const { password } = this.state;

        if (!password) {
            await this.setState({
                passwordStatus: 'Password required'
            });
        }
    }

    btnPress() {
        const { username, password, userStatus, passwordStatus } = this.state;
        const { actions } = this.props;
        if (username && userStatus === undefined && password && passwordStatus === undefined) {
            actions.loginValidate({
                username,
                password,
            });
        }
    }

    render() {
        const { login } = this.props;
        const { userStatus, passwordStatus } = this.state;

        return (
            <View style={styles.container}>
                <Spinner 
                    cancelable
                    visible={login && login.isLoading} 
                    textContent={'Loading...'} 
                />
                <View style={styles.header}>
                    <Image
                        source={require('../images/user.png')}
                        style={styles.logo}/>
                </View>
                <TextInput
                    autoFocus
                    placeholder='username'
                    style={styles.input}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    ref={(input) => { this.userInput = input; }}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.phoneValidation(); }}
                    onChangeText={
                        username => this.setState({ 
                            username, 
                            userStatus: undefined 
                        })
                    } 
                />
                {
                    (userStatus !== undefined) &&
                    <View style={styles.errorContainer}>
                        <Text style={styles.errText}>{userStatus}</Text>
                    </View>
                }
                <TextInput
                    placeholder="password"
                    style={styles.input}
                    secureTextEntry={true}
                    ref={(input) => { this.passwordInput = input; }}
                    keyboardType='default'
                    onSubmitEditing={() => { this.passwordValidation(); }}
                    onChangeText={
                        password => this.setState({ 
                            password, 
                            passwordStatus: undefined 
                        })
                    }
                />
                {
                    (passwordStatus !== undefined) &&
                    <View style={styles.errorContainer}>
                        <Text style={styles.errText}>{passwordStatus}</Text>
                    </View>
                }
                <TouchableHighlight style={styles.btn} onPress={() => this.btnPress()}>
                    <Text style={styles.btnText}>SIGNIN</Text>
                </TouchableHighlight>
                {
                    (login && login.error)&&
                    <View style={styles.errContainer}>
                        <Text style={styles.errText}>{login.data.message}</Text>
                    </View>
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return{
        login:state.login,
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators({
            loginValidate,
        },dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
