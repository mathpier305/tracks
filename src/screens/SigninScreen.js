import React, {useContext} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native'
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context } from '../Context/authContext';



const SigninScreen = ({navigation}) => {
    const {state, signin, clearErrorMessage} = useContext(Context);


    return (
        <View style={styles.container}> 
            <NavigationEvents 
             onWillBlur={()=>{ clearErrorMessage()}}/>
            <AuthForm 
             headerText="Sign in  to  your account"
             errorMessage={state.errorMessage}
             onSubmit={signin}
             submitButtonText="Sign in"/>
            <NavLink 
            text="Dont Have an account? Sign UP instead"
            routeName="Signup"/>
        </View>
    )
};

SigninScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SigninScreen;