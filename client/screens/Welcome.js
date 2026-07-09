import React from 'react';
import { globalStyles, colors } from '../styles/global';
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { PrimaryButton, OutlineButton } from '../components/Bits'


export default function Welcome ({ navigation }){
    return(
        <SafeAreaView style= {globalStyles.authContainer}>
            <View style={{ height: 170 }}> 
                <Text style= {style.heading}> Baseline </Text>
                <Text style={style.subtitle}> find your match </Text>
            </View>
            
            <View style={[style.bottomSection, {height: 30}]}>
                <OutlineButton label="Log In" onPress={() => navigation.navigate('Login')} 
                style={{ marginBottom: 16 }} />
            <PrimaryButton label="Sign Up" onPress={() => navigation.navigate('SignUp')} />
            </View>
            
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    heading: {fontSize: 44, fontWeight: '400', color: colors.text, letterSpacing: 4, paddingBottom: 20 },
    subtitle: {fontSize: 14, fontWeight: '300', color: colors.textMuted, marginBottom: 40, letterSpacing: 2.5, textAlign: 'center'},
    bottomSection: { paddingBottom: 0, marginTop: 120 }
})