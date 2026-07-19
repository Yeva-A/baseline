import React, { useEffect, useState } from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput,  Alert } from 'react-native';
import { Avatar } from '../components/Avatar';
import { MatchPostCard } from '../components/MatchPostCard';
import { SkillBadge, Tag } from '../components/Bits';
import { getOpenMatchPosts } from '../services/matchpostsService';

export default function MatchBoard ({ navigation }) {
    const [matchPosts, setMatchPosts] = useState([]);
    
    // Handles match acceptance, TODO: 
    const handleAccept = async () => {
        try {
        const result = await claimMatchPost(matchPostId, claimedBy);
        Alert.alert('Success', 'You have claimed this match');
        } catch ( error) {

        }
    }

    useEffect (() => {
        async function loadMatchPosts(){
            try {
                const posts = await getOpenMatchPosts('wfu.edu');
                setMatchPosts(posts);
            } catch (error) {
                Alert.alert('Error', error.message);
                }
            }
            loadMatchPosts();
        }, []);

    return (
    <SafeAreaView>

        <Text> Match Board </Text>   
        {matchPosts.map((post) => (
            <MatchPostCard key={post.id} matchPost={post} onAccept={() => handleAccept(post.id)}/>
        ))}

    </SafeAreaView>
    )
}