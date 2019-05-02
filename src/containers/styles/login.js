import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    header:{
        alignSelf:'center',
        padding:5,
        height:140,
        width:140,
        borderRadius:70,
        marginBottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightgrey',
    },
    logo:{
        height:120,
        width:120,
        alignSelf:'center',
    },
    input: {
        margin: 5,
        height: 50,
        borderWidth: 1,
        paddingLeft: 15,
        borderRadius: 25,
        alignSelf: 'stretch',
    },
    btn: {
        margin: 10,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c589f',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    errorContainer: {
        marginLeft: 20,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
    },
    errText: {
        color: 'red',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    btnText:{
        fontSize:16,
        color:'#ffffff',
    },
    errContainer:{
        padding:10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent:'center',
    }
})