import { globalStyles, colors } from '../styles/global';
import { View, Text, TouchableOpacity } from "react-native";

function getInitials(name){
    const parts = name.split(' ');
    const firstInitial = parts[0][0];
    const lastInitial = parts[parts.length-1][0];

    const initials = firstInitial + lastInitial
    return initials;
}

export function Avatar({ name }){
    const initials = getInitials(name); 
    return(
        <View 
        style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text
            style= {{
                color: colors.white,
                fontSize: 14, 
                fontWeight: '600'
            }} > {initials} </Text>
        </View>
    )
}
