//import liraries
import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet, ImageBackground, } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import BG from '../images/bg.png'
import Loading from './Loading'


// create a component,
class App extends Component{
 
  state={
    loggedIn:null
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBZwK5FVz0NTUCE-I9SSdkCmMvkxIfmcpQ",
      authDomain: "homework2-bd2bd.firebaseapp.com",
      databaseURL: "https://homework2-bd2bd.firebaseio.com",
      projectId: "homework2-bd2bd",
      storageBucket: "homework2-bd2bd.appspot.com",
      messagingSenderId: "1046806545305",
      appId: "1:1046806545305:web:f4f1b6ff5ea2a905974908"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
     firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })

   
  }


  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG} >
                  <LoginForm/>
               </ImageBackground>

        
      case true:
           return <Articles/>

           default:
             return <Loading/>


    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});

//make this component available to the app
export default App;
