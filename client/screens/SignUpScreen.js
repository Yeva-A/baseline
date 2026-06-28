import React, { useState } from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Ensures password is consisent
  const handleSignUp = async () => {
    if (password != confirmPassword){
        Alert.alert('Error', 'Passwords do not match');
        return;
    }

    // POST API 'auth/register'
    const response = await fetch('http://192.168.1.154:3000/auth/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
    });

    // Parse response and handle success or error
    const data = await response.json();

    if (response.ok){
        Alert.alert('Success', 'Account created!');
        navigation.navigate('ProfileSetup'); 
    } else {
        Alert.alert('Error', data.error);
    }
  }

  return (
    <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.title}> Create Account </Text>

        <TextInput 
        placeholder= "Email" 
        style={globalStyles.input} 
        value={email}
        onChangeText={setEmail}    
        />

        <TextInput 
        placeholder= "Password" 
        style={globalStyles.input}
        value={password}
        onChangeText={setPassword} 
        />

        <TextInput 
        placeholder= "Confirm Password" 
        style={globalStyles.input} 
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        />
        
        <TouchableOpacity style={globalStyles.button} onPress= {handleSignUp}> 
            <Text style={globalStyles.buttonText}> Sign Up </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress= {() => navigation.navigate('Welcome')}>
            <Text> Back to Home </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}