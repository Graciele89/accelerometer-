import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react';

const HomeScreen = () => {
  const navigation = useNavigation()
  
const handleSignOut = () => {
  auth
  .signOut()
  .then(() => {
    navigation.replace("Login")
  })
  .catch(error => alert(error.message))
  }




  return (
    <View style={styles.container}>         
      <Text>Email:{auth.currentUser?.email}</Text>   {/* if is undentified dont check for email */}
      <TouchableOpacity 
      onPress={handleSignOut}
      style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      
    </View>
  )
}



export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#0782F8',
    with: '60%',
    padding: 17,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  }

})