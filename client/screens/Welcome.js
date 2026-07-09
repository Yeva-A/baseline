import React from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { PrimaryButton, OutlineButton } from '../components/Bits'


export default function Welcome ({ navigation }){
    return(
        <SafeAreaView style= {globalStyles.authContainer}>
            <Text style= {globalStyles.brand}> Baseline </Text>

            <OutlineButton label="Log In" onPress={() => navigation.navigate('Login')} 
                style={{ marginBottom: 16 }}
                />

            <PrimaryButton label="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </SafeAreaView>
    );
}