import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context  as AuthContext } from '../Context/authContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'


const SignupScreen = ({navigation }) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);


    return <View style={styles.container} >
        <NavigationEvents 
            onWillBlur={()=> { 
                clearErrorMessage()}} />
        <AuthForm 
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup} />

        <NavLink 
            routeName='Signin'
            text="Already Have an account? Sign in instead" />
    </View >
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default SignupScreen;