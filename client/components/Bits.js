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

export function SkillBadge ({ label }){
    return(
        <View
        style={{
            alignItems: 'center',
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: 'rgba(122, 158, 126, 0.4)',
            backgroundColor: 'rgba(122, 158, 126, 0.05)',
            alignSelf: 'flex-start'
        }}>
            
            <Text style={{ fontSize: 12, fontWeight: '300', color: colors.primary, letterSpacing: 1.5 }}> { label } </Text>
        </View>
    )
}

// may need to add 'tones' for different pages
export function Tag ({ label }){
    return(
        <View
        style={{
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.cream,
            alignSelf: 'flex-start'
        }}>
            
            <Text style={{ fontSize: 13, fontWeight: '300', color: colors.text, letterSpacing: 0 }}> { label } </Text>
        </View>
    )
}

