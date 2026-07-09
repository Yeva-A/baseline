import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#7A9E7E',      // sage green - buttons, active states, accents
  background: '#FFFFFF',   // white - app background
  cream: '#F8F8F5',        // off white - input backgrounds, subtle fills
  text: '#1A1A1A',         // near black - primary text
  textMuted: '#888888',    // medium grey - secondary text, labels, timestamps
  textLight: '#BBBBBB',    // light gray - placeholder text
  border: '#EEEEEE',       // very light gray - dividers, borders, card outlines
  primaryDark: '#6B8E70',   // darker sage - button hover/active state
  primaryDarker: '#5F7F64', // darkest sage - button active pressed state
  white: '#FFFFFF',         // white - cards
};

export const globalStyles = StyleSheet.create({
  authContainer: {           // container for welcome screen
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingHorizontal: 24,
  },

  screenContainer: {       // container for all other screens
    flex: 1,
    backgroundColor: colors.background,
  },
  
  brand: {                  // 'Baseline' word logo
    fontSize: 30, 
    fontWeight: '400', 
    color: colors.text,
    letterSpacing: 4,
    marginLeft: -14,
  },

  title: {                 // Headers for each page
    fontSize: 22,
    fontWeight: '500',
    color: colors.text,
    letterSpacing: 4,
  },

  label: {                // Small labels for login and sign up
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: colors.textMuted,
    marginLeft: -4,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 326,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    width: 326,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.white,
    letterSpacing: 3,
  },

  outlineButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.primary,
    letterSpacing: 3,
  },

  input: {
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 0,
    fontSize: 15,
    color: colors.text,
  },
});