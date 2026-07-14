import React from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Avatar } from '../components/Avatar'
import { MatchPostCard } from '../components/MatchPostCard';
import { SkillBadge, Tag } from '../components/Bits'

export default function MatchBoard ({ navigation }) {
    return (
    <SafeAreaView> 
        <Text> Match Board </Text>

        <Avatar name="Melissa Heart" />
        <SkillBadge label="4.0 Intermediate" />
        <Tag label="Doubles" />
        <MatchPostCard matchPost={{
            postedByName: "Ava Adams",
            skillLevel: "4.0",
            matchType: "singles",
            playStyle: "competitive",
            dateTime: "2026-07-20T18:00:00",
            message: "Looking for a hitting partner"
}} />
    </SafeAreaView>
    )
}