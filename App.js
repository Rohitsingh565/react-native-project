import { StatusBar } from 'expo-status-bar';
import {Animated, Easing, ImageBackground,  Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import 'expo-dev-client';
import  {GoogleSignin , GoogleSigninButton} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React ,{useState, useEffect ,useRef} from 'react';
import styled from "styled-components";
import Cards from './Components/Cards';
import UserCard from './Components/UserCard';
import Header from './Components/Header';
import BackgroundAnimation from './Animation/BackgroundAnimation';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:'430716650217-ct6ghe8pf0amkjliiieb7sv292bn6857.apps.googleusercontent.com'
  });

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  const  onGoogleButtonPress = async ()  => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
  
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
   
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    }
    catch (error) {
      console.error(error);
    }
  }
  
  if (initializing) return null;

 if(!user){
  return(
    <View >
      <BackgroundAnimation/>
  <Header/>
  <GoogleSigninButton
   style = {{width:150, height:55, marginTop:30, marginLeft:100 }}
   onPress={onGoogleButtonPress}
   />
   <Cards  imageURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuLh5RyUR6FDYZi9MQeD7RoQfU90cY67quA&usqp=CAU" } title={"First card"} description = {"Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build featur and more." }/>
  </View>
  )
 }

 return (
  <ScrollView >
    <BackgroundAnimation/>
    <Header/>
    <View style={{width:80,marginLeft:230, marginTop:5}} >
    <Button  color={'lightblue'} title='Sign Out'  onPress={signOut}/>
    </View>
    <View style={{marginTop:30, alignItems:'center', border: '4'}}>
      <UserCard  url={user.photoURL} name={user.displayName}/>
    </View>
    <Cards  imageURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuLh5RyUR6FDYZi9MQeD7RoQfU90cY67quA&usqp=CAU" } title={"First card"} description = {"Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build featur and more." }/>
    <Cards  imageURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-zw2gwlCsj0l0WyXnppaSCeTa4rCrYEEyQ&usqp=CAU" } title={"Second card"} description = {"Rolls-Royce Motor Cars Limited is a British luxury automobile maker which has operated as a wholly owned subsidiary of BMW AG since 2003 as the exclus." }/>
  </ScrollView>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:23,
    fontWeight:'bold'
  }
});


