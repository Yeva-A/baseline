import React from 'react';
import { globalStyles, colors } from '../styles/global';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function PrimaryButton ({label, onPress, style}){
    return (
    <TouchableOpacity 
    style={[globalStyles.primaryButton, style]} 
    onPress={onPress}>
        <Text style={globalStyles.primaryButtonText}> {label} </Text> 
    </TouchableOpacity>
)}

export function OutlineButton ({label, onPress, style}){
    return (
        <TouchableOpacity 
        style={[globalStyles.outlineButton, style]} 
        onPress={onPress}>
        <Text style={globalStyles.outlineButtonText}> {label} </Text> 
        </TouchableOpacity>
    )
}

export function Field ({label, placeholder, value, onChangeText, style}){
    return (
        <View style={{ width: '100%' }}> 
        <Text style={globalStyles.label}> {label} </Text> 

        <TextInput
            placeholder= {placeholder}
            style={[globalStyles.input, style]}
            value={value}
            onChangeText={onChangeText}
        />
        </View>
    )
}

export function BackButton ({ navigation }){
    return (
    <TouchableOpacity onPress={() => navigation.goBack()}> 
        <Ionicons name="chevron-back" size={24} color={colors.textMuted} />
    </TouchableOpacity>
    )
}

