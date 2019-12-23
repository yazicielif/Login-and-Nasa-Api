//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import '../images/ea.png';


// create a component
const Logo = () => {
    return (
        <View>
        <Image source={require('../images/ea.png')} style={{height:150, width:150}} />
        </View>
    );
};


//make this component available to the app  <Image source={{uri:'https://uilogos.co/img/logotype/circle.png'}}
export default Logo;
