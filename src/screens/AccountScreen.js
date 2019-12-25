import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../Context/authContext';
import { SafeAreaView } from 'react-navigation';


const AcccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{ fontSize: 48 }}> AcccountScreen </Text>
            <Spacer>
                <Button title="Sign Out" onPress={() => {
                    signout();
                }} />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AcccountScreen;