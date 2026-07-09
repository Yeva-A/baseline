import React, { useState } from 'react';
import { globalStyles, colors } from '../styles/global';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native';
import { PrimaryButton, BackButton, Field } from '../components/Bits'

export default function Login ({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle login function
  const handleLogin = async () => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Success', 'Login Successful');
        navigation.navigate('Home'); 
    } catch (error) {
        Alert.alert('Error', error.message);

    }
  }

  return ( 
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background}}>
    <View style={styles.container}>
        {/* Back button */}
        <BackButton navigation={navigation}> </BackButton>

        {/* Brand Block */}
        <View style={styles.brandBlock}>
        <View style={{ height: 30}} />
            <Text style={globalStyles.brand} > Baseline </Text>
            <Text style={styles.heading}> Welcome Back </Text>
            <Text style={styles.subtitle}> Your next match is waiting. </Text>
        </View>
        
        {/* Fields */}
        <View style={styles.fieldGroup}> 
            <Field
            label="Email"
            placeholder="you@school.edu"
            value={email}
            onChangeText={setEmail}
            style= {{ marginBottom: 24 }}
        />
            <Field
            label="Password"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
        />
        </View>
        <View style={styles.bottomSection}> 
            <PrimaryButton label="Log In" onPress={handleLogin} />
        </View>
    
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        justifyContent: 'flex-start',
    },
    brandBlock: { marginTop: 55 },
    bottomSection: { alignItems: 'center', paddingBottom: 16, marginTop: 90 },
    heading: {fontSize: 22, fontWeight: '400', color: colors.text, marginTop: 40, marginLeft: -9, },
    subtitle: {fontSize: 14, fontWeight: '300', color: colors.textMuted, marginTop: 8, marginLeft: -5},
    fieldGroup: { width: '100%', marginTop: 50}
})