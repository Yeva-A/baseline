import React from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

export default function Home ({ navigation }) {
    return (
    <SafeAreaView> 
        <Text> Home Screen </Text>

    <TouchableOpacity onPress= {() => navigation.navigate('Welcome')}>
        <Text> Back to Home </Text>
    </TouchableOpacity>

    </SafeAreaView>
    )
}