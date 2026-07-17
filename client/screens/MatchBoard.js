import React from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Avatar } from '../components/Avatar';
import { MatchPostCard } from '../components/MatchPostCard';
import { SkillBadge, Tag } from '../components/Bits';

export default function MatchBoard ({ navigation }) {
    // Handles match acceptance, TODO: 
    const handleAccept = async () => {
        try {
        const result = await claimMatchPost(matchPostId, claimedBy);
        Alert.alert('Success', 'You have claimed this match');
        } catch ( error) {

        }
    }
    return (
    <SafeAreaView> 
        <Text> Match Board </Text>   
        <MatchPostCard matchPost={{
            postedByName: "Sofia Reyes",
            skillLevel: "3.5 Intermediate",
            matchType: "Singles",
            playStyle: "Competitive",
            dateTime: "2026-07-20T18:00:00",
            message: "Looking for a solid rally partner before the weekend tournament."
}} />
    </SafeAreaView>
    )
}