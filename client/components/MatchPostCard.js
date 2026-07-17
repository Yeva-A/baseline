import React, { useState } from 'react';
import { globalStyles, colors } from '../styles/global';
import { View, Text} from 'react-native';
import { Avatar } from './Avatar';
import { ConfirmDialog } from './ConfirmDialog';
import { SkillBadge, Tag, OutlineButton, PrimaryButton } from './Bits';

export function MatchPostCard({matchPost, onAccept}){
    // Confirm state 
    const [showConfirm, setShowConfirm] = useState(false);
    const [justClaimed, setJustClaimed] = useState(false);

    //Date time logic
    const date = new Date(matchPost.dateTime);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDay();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = dayNames[day];
    const amPm = hour < 12 ? 'AM' : 'PM';
    const result = `${dayName} · ${formatHour(hour)}:${formatMinutes(minutes)} ${amPm}`;

function formatHour(hour){
    if (hour == 0 ) {
        return '12';
    } else if ( hour >= 1 && hour <= 11 ){
        return hour;
    }
    else if ( hour >= 13 && hour <= 23) {
        return (hour - 12);
    } 
    else if ( hour == 12 ){
        return hour;
    }
}

function formatMinutes(minutes){
    if (minutes == 0 ){
        return '00';
    } else {
        return minutes;
    }
}

    return(
        <View
        style={{
            backgroundColor: colors.white,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border,
            padding: 20,
            marginBottom: 14
        }}>
        {/* Header: Avatar, Name. Below skill badge*/}
        <View style={{ flexDirection: 'row', gap: 12}}>
            <Avatar name={matchPost.postedByName} /> 
            <View>
                <Text> {matchPost.postedByName} </Text>
                <View style={{ marginTop: 4 }}><SkillBadge label={matchPost.skillLevel}/></View>
            </View>

        </View>

        {/* Tags */}
        <View style={{ flexDirection: 'row', gap: 6, marginTop: 14 }}>
            <Tag label={matchPost.matchType} />
            <View>
                <Tag label={matchPost.playStyle} />
            </View>
        </View>

        {/* Date, time, and dot row */}
        <View style={{ flexDirection: 'row', gap: 8, marginTop: 16, alignItems: 'center' }}>

            {/* Dot */}
            <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: colors.primary}}></View>
            
            {/* Date and time */}
            <View>
                <Text style={{ color: colors.textMuted }}> {result} </Text>
            </View>
        </View>

        {/* Message, optional rendering*/}
        <View style={{ marginTop: 12 }}>{matchPost.message && <Text style={{ textAlign: 'left'}}>"{matchPost.message}" </Text>}</View>

        <View style={{ marginTop: 20 }}>
        {justClaimed ? (
            <PrimaryButton
                label="View Match"
                onPress={() => { // TODO: navigate to match details screen  
                }}/> 
            ) : (
            <OutlineButton 
            label="Accept"
            onPress={() => {setShowConfirm(true);}}/>
        )}
        </View>

        <ConfirmDialog
            open={showConfirm}
            title="Accept this match?"
            message={`You'll be matched with ${matchPost.postedByName}`}
            onConfirm={() => {
                onAccept();
                setJustClaimed(true);
                setShowConfirm(false);
            }}
            onCancel={() => setShowConfirm(false)}

        />

    </View>   
    )
}