import React from 'react';
import { globalStyles, colors } from '../styles/global';
import { View, Text} from 'react-native';
import { Avatar } from './Avatar';
import { SkillBadge, Tag } from './Bits';

export function MatchPostCard({matchPost, onAccept}){
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
        <View style={{ flexDirection: 'row'}}>
            <Avatar name={matchPost.postedByName} /> 
            <View>
                <Text> {matchPost.postedByName} </Text>
                <SkillBadge label={matchPost.skillLevel} />
            </View>

        </View>

        {/* Tags */}
        <View style={{ flexDirection: 'row' }}>
            <Tag label={matchPost.matchType} />
            <View>
                <Tag label={matchPost.playStyle} />
            </View>
        </View>

        {/* Date and Time */}
        <View style={{ flexDirection: 'row' }}>

            {/* Dot before date and time */}
            <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: colors.primary}}> </View>
            
            {/* Date and time */}
            <View>
                
            </View>
        </View>
        </View>   
    )
}