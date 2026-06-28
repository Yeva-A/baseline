import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#1A5276',
  white: '#FFFFFF',
  background: '#F9F9F9',
  text: '#1A1A1A',
  placeholder: '#999999',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 60,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    width: 320,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    width: 320,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: colors.white,
  },
});