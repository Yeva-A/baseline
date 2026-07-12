import React, { useState } from 'react';
import { globalStyles, colors } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native';
import { Field, BackButton, PrimaryButton } from '../components/Bits'
import { registerUser } from '../services/authService';

export default function SignUp ({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validates password consistency. Registers the user via authService, 
  // navigates to ProfileSetup on success, alert shown on failure

  const handleSignUp = async () => {
    if (password != confirmPassword){
        Alert.alert('Error', 'Passwords do not match');
        return;
    }

    try {
        const data = await registerUser(email, password);
        Alert.alert('Success', 'Account created');
        navigation.navigate('ProfileSetup', {uid: data.uid});
    } catch (err) {
        Alert.alert('Error', err.message)
    }
    }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background, }}>
        <View style={ styles.container }>
        {/* Back Button */}
        <BackButton navigation={navigation}> </BackButton>

        {/* Brand Block */}
        <View styles={styles.brandBlock}> 
        <View style={{ height: 30 }} />
            <Text style={globalStyles.brand}> Baseline </Text>
            <Text style={styles.heading}> Create your account </Text>
            <Text style={styles.subtitle}> Join the court community in a few quiet steps. </Text>
        </View>
        
        {/* Fields */}
        <View style={ styles.fieldGroup }> 
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
            style= {{ marginBottom: 24}}
            />

            <Field
            label="Confirm Password"
            placeholder="••••••••"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            />
        </View>

        <View style={ styles.bottomSection }>
            <PrimaryButton label="Sign Up" onPress= {handleSignUp} />
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
    brandBlock: { marginTop: 55},
    bottomSection: { alignItems: 'center', paddingBottom: 16, marginTop: 90 },
    heading: {fontSize: 22, fontWeight: '400', color: colors.text, marginTop: 40, marginLeft: -9,},
    subtitle: {fontSize: 14, fontWeight: '300', color: colors.textMuted, marginTop: 8, marginLeft: -5},
    fieldGroup: { width: '100%', marginTop: 50}
})