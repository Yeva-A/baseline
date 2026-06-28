import React, { useState } from 'react';
import { globalStyles } from '../styles/global';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle login function
  const handleLogin = async () => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Success', 'Login Successful');
        navigation.navigate('HomeScreen'); // TODO: create homescreen
    } catch (error) {
        Alert.alert('Error', error.message);

    }
  }

  return (
    <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.title}> Login </Text>

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

        <TouchableOpacity style={globalStyles.button} onPress= {handleLogin}> 
            <Text style={globalStyles.buttonText}>  Login </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress= {() => navigation.navigate('Welcome')}>
            <Text> Back to Home </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}