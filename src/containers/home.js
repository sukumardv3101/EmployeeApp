import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { styles } from './styles/home';
import EmpCard from '../components/employeeCard';
import { getEmployeeData } from '../actions/index';

class Home extends Component {

    state = {
        refresh:false,
    }

    componentDidMount() {
        this.props.actions.getEmployeeData();
    }

    renderRefresh(){
        this.setState({refresh:true});
        this.props.actions.getEmployeeData();
        this.setState({refresh:false});
    }

    render() {
        const { employeeData } = this.props
        const EmpData = employeeData && employeeData.data && employeeData.data.user;

        return (
            <View style={styles.container}>
                <Spinner 
                    cancelable
                    visible={employeeData && employeeData.isLoading} 
                    textContent={'Loading...'} 
                />
                <ScrollView
                    bounces={true}
                    style={styles.scroll}
                    refreshControl={
                        <RefreshControl 
                            refreshing={this.state.refresh}
                            onRefresh={this.renderRefresh.bind(this)}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                >
                    {
                        (EmpData)&&
                        _.map(EmpData,(data,index) => (
                            <EmpCard
                                key={index}
                                name={data.name}
                                age={data.age}
                                gender={data.gender}
                                email={data.email}
                                phoneNo={data.phoneNo}/>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return{
        employeeData:state.employeeData
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators({
            getEmployeeData,
        },dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
