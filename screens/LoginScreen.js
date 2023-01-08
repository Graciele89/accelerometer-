import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
//import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    //only runs once at the begining, checks if is logged in already
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if (user) {
                navigation.navigate("Home")
            }
        });
        return unsubscribe;
    },[])

    // // signs up the user with email and pwd  (created a new ascreen to handle that= register)
    // const handleSignUp = () => {
    //     auth;
        
    //     createUserWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //         const user = userCredentials.user;

    //         console.log('Registered with:', user.email);
    //     })
    //     //check if is working
    //     .catch(error => alert(error.message))
    // }

    //this is for when is already registered and only wants to log in
    const handleLogin = () => {
        auth;

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        //check if is working
        .catch(error => alert(error.message))
    }


  return ( 
    //(keyboardavoidingView)makes the keyboard come up without blocking the input fields
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}> 

            <TextInput 
             placeholder="Email" 
            value={email}
            onChangeText={text => setEmail(text)}
             style={styles.input}
            />
            <TextInput 
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />

        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]} //two styles on the button
            >
            <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>


    </KeyboardAvoidingView>
  )
}

export default LoginScreen    //make it acessable

// styling the login screen:

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 17,
        paddingVertical: 10,
        borderRadius: 7,
        marginTop: 7,
        fontSize: 15,
    },
    buttonContainer: { // container of the two buttons
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    button: { // two buttons pwd & register
        backgroundColor: '#3A7EE2',
        width: '100%',
        padding: 17,
        borderRadius: 7,
        alignItems: 'center',
    },
   
    buttonOutline: {    //register button
        backgroundColor: 'white',
        marginTop: 7,
        borderColor: '#3A7EE2',
        borderWidth: 2,
    },
    buttonText: {    // login text 
        color: 'White',
        fontWeight: '700',
        fontSize: 15,
    },

    buttonOutlineText: {  //register text
        color: '#3A7EE2',
        fontWeight: '750',
        fontSize: 15, 
    },

})

