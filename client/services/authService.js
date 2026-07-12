import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

// Sends  email and password to the backend to register a new account
async function registerUser(email, password){
    const response = await fetch('http://192.168.1.154:3000/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    });

    // Parse response and handle success or error
    const data = await response.json();

    if (!response.ok){
        Alert.alert('Error', data.error);
    }
    return data;
  }

// Uses firebase native signIn to log users in
async function loginUser (email, password){
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  }

  module.exports = { registerUser, loginUser };