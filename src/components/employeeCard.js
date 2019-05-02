import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

const EmpCard = (props) => (
    <View style={styles.card}>
        <View style={styles.left}>
            <Image
                source={require('../images/user.png')}
                style={styles.logo}/>
        </View>
        <View style={styles.right}>
            <Text style={styles.name}>{props.name.toUpperCase()}</Text>
            <View style={styles.ageContainer}>
                <Text style={styles.age}>Age: {props.age}</Text>
                <Text style={styles.age}>Gender: {props.gender}</Text>
            </View>
            <Text style={styles.email}>{props.email}</Text>
            <Text style={styles.phone}>{props.phoneNo}</Text>
        </View>
    </View>
);

EmpCard.propTypes = {
    name:PropTypes.string,
    age:PropTypes.string,
    gender:PropTypes.string,
    email:PropTypes.string,
    phoneNo:PropTypes.string,
};

EmpCard.defaultProps = {
    name:'Name',
    age:'Age',
    gender:'Gender',
    email:'Email',
    phoneNo:'Phone',
};

const styles = StyleSheet.create({
    card:{
        margin:10,
        // height:120,
        marginBottom:0,
        alignSelf:'stretch',
        borderWidth:0.6,
        borderColor:'grey',
        flexDirection:'row',
    },
    left:{
        flex:2,
        padding:10,
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightgrey',
    },
    logo:{
        height:100,
        width:100,
        alignSelf:'center',
    },
    right:{
        flex:4,
        padding:5,
        paddingTop:10,
        paddingBottom:10,
        alignSelf:'stretch',
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
        color:'#2c589f',
        marginBottom:5,
    },
    ageContainer:{
        marginBottom:5,
        alignSelf:'stretch',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    email:{
        color:'#222',
        fontSize:15,
        letterSpacing:0.3,
        marginBottom:2,
    },
    phone:{
        color:'#000',
        fontSize:15,
        letterSpacing:0.3,
        marginBottom:2,
    },
    age:{
        color:'#000',
    }
});

export default EmpCard;