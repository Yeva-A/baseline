import React from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }){
    return(
        <SafeAreaView style= {globalStyles.container}>
            <Text style= {globalStyles.title}> Baseline </Text>

            <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={globalStyles.buttonText}> Login </Text> 
            </TouchableOpacity>

            <TouchableOpacity style= {globalStyles.button} onPress={() => navigation.navigate('SignUp')}>
                <Text style= {globalStyles.buttonText}> Sign Up </Text> 
            </TouchableOpacity>
        </SafeAreaView>
    );
}