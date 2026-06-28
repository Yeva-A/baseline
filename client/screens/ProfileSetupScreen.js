import React from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

export default function ProfileSetupScreen ({ navigation }) {
    return(
    <SafeAreaView> 
        <Text> Profile Set Up Screen </Text>
        
    <TouchableOpacity onPress= {() => navigation.navigate('Welcome')}>
        <Text> Back to Home </Text>
    </TouchableOpacity>
    </SafeAreaView>
    )
}