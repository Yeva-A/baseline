import { Modal, View, Text } from 'react-native';
import { OutlineButton, PrimaryButton } from './Bits';
import { colors } from '../styles/global';

// Reusable confirmation popup used for Match Board and Edit Match Post, and Edit Profile screens
export function ConfirmDialog({ open, title, message, confirmLabel = "Confirm", onConfirm, onCancel }){
    return(
<Modal visible={open} transparent={true} animationType="fade">
    <View style={{ 
        flex: 1, 
        backgroundColor: 'rgba(0,0,0,0.3)', 
        justifyContent: 'center', 
        alignItems: 'center' }}> 
        <View style={{ borderRadius: 16, padding: 24, marginHorizontal: 40, maxWidth: 300, width: '100%', backgroundColor: colors.white}}>
            {/* Title */}
            <Text style={{ fontSize: 16, fontWeight: '500', color: colors.text }}> {title} </Text>

            {/* Message */}
            {message && (
                <Text style={{ marginTop: 8, fontSize: 13, color: colors.textMuted,}}> {message} </Text>
            )}

            {/* Button */}
            <View style={{ flexDirection: 'row', marginTop: 24, gap: 12 }}> 
                <OutlineButton label="Cancel" onPress={onCancel} style= {{ flex: 1, paddingLeft: 3}}/> 
                <PrimaryButton label={confirmLabel} onPress={onConfirm } style= {{ flex: 1, paddingLeft: 3 }}/>
            </View>
        </View>
    </View>
</Modal>
);
}