//import liraries
import React, { Component } from 'react';
import firebase from 'firebase'
import { View,
         Text,
         ScrollView,
         Image,
      StyleSheet,
      TouchableOpacity } from 'react-native';
      import apiPhotos from './apiPhotos';
import { observable } from "mobx";
import { observer, inject ,Provider} from "mobx-react";

//@inject("emailAndPassword") 
@observer
export default class Articles extends Component {
    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
          roverName0: '',
          roverPic0: '',
          roverName1: '',
          roverPic1: '',
          roverName2: '',
          roverPic2: '',
          roverName3: '',
          roverPic3: '',
          date0:'',
          date1:'',
          date2:'',
          date3:'',
          id0:'',
          id1:'',
          id2:'',
          id3:''
        }
    
      }


      componentWillMount(){
        apiPhotos.getPhotos().then((res) => {
          this.setState({
            rovers: res.photos,
            roverName0: res.photos[0].rover.name,
            roverPic0: res.photos[0].img_src,
            roverName1: res.photos[1].rover.name,
            roverPic1: res.photos[1].img_src,
            roverName2: res.photos[2].rover.name,
            roverPic2: res.photos[2].img_src,
            roverName3: res.photos[3].rover.name,
            roverPic3: res.photos[3].img_src,
            date0 : res.photos[0].earth_date,
            date1 : res.photos[1].earth_date,
            date2 : res.photos[2].earth_date,
            date3: res.photos[3].earth_date,
            id0: res.photos[0].id,
            id1: res.photos[1].id,
            id2: res.photos[2].id,
            id3: res.photos[3].id
          })
        })
      }


    render() {
        return (
            <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Text style={styles.content} >
                     Firebase üzerinden bağlandınız
                </Text>
                    <TouchableOpacity style={{padding:20 }} onPress={()=> firebase.auth().signOut()} >
                     <Text style={{color:'#1B9CFC'}} >Çıkış</Text>
               </TouchableOpacity>
              <Image 
                source={{uri: this.state.roverPic0}} 
                style={{width: 370, height: 200}} 
              />
              <Text style={styles.text}>{this.state.id0}
              </Text>
              <Text style={styles.text}>{this.state.date0}
               </Text>
              <Text style={styles.text}>
                 Rover: {this.state.roverName0}
               </Text>
               <Image 
                source={{uri: this.state.roverPic1}} 
                style={{width: 370, height: 200}} 
              />
              <Text style={styles.text}>{this.state.id1}
              </Text>
              <Text style={styles.text}>{this.state.date1}
               </Text>
              <Text style={styles.text}>
                 Rover: {this.state.roverName1}
               </Text>
               <Image 
                source={{uri: this.state.roverPic2}} 
                style={{width: 370, height: 200}} 
              />
              <Text style={styles.text}>{this.state.id2}
              </Text>
              <Text style={styles.text}>{this.state.date2}
               </Text>
              <Text style={styles.text}>
                 Rover: {this.state.roverName2}
               </Text>
               <Image 
                source={{uri: this.state.roverPic3}} 
                style={{width: 370, height: 200}} 
              />
              <Text style={styles.text}>{this.state.id3}
              </Text>
              <Text style={styles.text}>{this.state.date3}
               </Text>
              <Text style={styles.text}>
                 Rover: {this.state.roverName3}
               </Text>
               </ScrollView>
            </View>
            )  
        
    }
}
    // define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    articleContainer:{
      padding:10,
      borderBottomColor:'rgba(255,255,255,.7)',
      borderBottomWidth:5
    },
    scrollView: {
        marginHorizontal:10,
      },
    heading:{
        color: 'white',
        fontSize: 15
    },
    text: {
        color: 'white',
        fontSize: 15
      },
    content:{
      marginTop:10,
      color: 'white',
    fontSize: 19
      
    }
})

//export default Articles;
