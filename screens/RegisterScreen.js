import { Alert, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core';
import { Text } from 'react-native-paper'
import { collection, addDoc } from "firebase/firestore";

const RegisterScreen = () => {

  // Student Info
  const [student_name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [student_id, setStudentID] = useState('')
  const [student_course, setCourse] = useState('')
  const [student_email,setEmail] = useState('')
  
  const navigation = useNavigation();

    // signs up a new user with email and password provided
    const handleSignUp = () => {
      auth;

      try {
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredentials.user;

        // Add student info in collection called "users"
          const docRef = await addDoc(collection(db, "users"), {
            student_name: student_name,
            student_id: student_id,
            student_course: student_course,
            email: student_email,
            accelerometer_data: [],
          });
    
            console.log('Registered with:', user.email);
            navigation.navigate('Home');
        })
        //check if is working
      //   .catch(error => alert(error.message))
      // }
      // signs up a new user with email and password provided
      // const handleSignUp = () => {
      //   auth;
      // try {
      //   createUserWithEmailAndPassword(auth, email, password)
      //   .then(async (userCredential) => {

      //     const user = userCredential.user;
          
      //     // Add student info in collection called "users"
      //     const docRef = await addDoc(collection(db, "users"), {
      //       student_name: student_name,
      //       student_id: student_id,
      //       student_course: student_course,
      //       email: student_email,
      //       accelerometer_data: [],
      //     });
      //     console.log("Used ID for this doc: ", docRef.id);

      //     navigation.navigate('Login');
          
      //     // welcome user 
      //     Alert.alert(`${student_name}, Welcome. Please log in with your StudentID and password: `);                    
                    
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     console.log("Error while trying to create a student: ",errorCode ,errorMessage);
      //   });
      }catch(e) {
        Alert.alert("Please, fill in the information correctly.");
        console.log("Error on creating a student: ",e);
       }
      
  

  return (

    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">

    {/*  student Infoation */}
    <View style={styles.inputContainer}>

      <View>
        <Text style={
          {fontSize: 15, fontWeight: 'normal'}
          }>Student Name:</Text>

        <TextInput style={styles.input} placeholder="Hanah Peterson" 
        value={ student_name } onChangeText={ text => setName(text)} />       
      </View>

      <View>
        <Text style={{fontSize: 15, fontWeight: 'normal',
         marginTop: 12}}>Student ID:</Text>
        <TextInput style={styles.input} placeholder="12345" keyboardType='numeric' maxLength={5}
         value={ student_id } onChangeText={ textr => setStudentID( text )} />
      </View>

      <View>
        <Text style={{fontSize: 15, fontWeight: 'normal',
         marginTop: 12}}>Course:</Text>
        <TextInput style={styles.input} placeholder="BSC12345" 
        value={ student_course } onChangeText={ text => setCourse( text )} />
      </View>

      <View>
        <Text style={{fontSize: 15, fontWeight: 'normal',
         marginTop: 12}}>Password:</Text>
        <TextInput style={styles.input} placeholder="abCD23*&%@" 
        value={ password } onChangeText={ text => setPassword( text )} secureTextEntry />
      </View>
    </View>

    {/* this is the Register button */}
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]} >
        <Text style={styles.buttonOutlineText}>Register</Text>
      </TouchableOpacity>
    </View>

    </KeyboardAvoidingView>
  )
}


export default RegisterScreen;

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      width: '80%',
    },
    input: {
      backgroundColor: 'white',
      width: '100%',
      padding: 17,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#3A7EE2',
      marginTop: 10,
  
    },
    buttonContainer: {
      width: '65%',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: 30,
    },
    button: {
      backgroundColor: '#3A7EE2',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      borderWidth: 1,
      marginTop: 8,
      borderColor: '##3A7EE2',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,
    },
    buttonOutlineText: {
      color: '#3A7EE2s',
      textAlign: 'center',
      fontSize: 15,
    },
  });