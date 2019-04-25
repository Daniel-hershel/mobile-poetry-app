// 0:a. Importat React from 'react' -- python style I think?
import React, { Component } from 'react';



import {PropTypes} from 'prop-types';
// 0.b. Import the big three modules(?) from RNative from React 1. StyleSheet 2.Text 3.View--prolly more than three well maybe those are a big three
import { 
  ActivityIndicator, Dimensions, FlatList, TouchableHighlight, ScrollView, StyleSheet, Text, Image, View 
} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import { Button } from 'react-native-elements'

import {font} from 'expo'


let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height; //full height   



export  default class PromptOne extends React.Component {
 // 1.i constructor for component
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      text: '',
      localText: [],
      URL: '',
      KeyWord:'',
      Prompt: ''

    }
  // this.updateText = this.updateText.bind(this)
  this.componentDidMount = this.componentDidMount.bind(this)
      
  };



// For Text Input Update
updateText(text){
  // console.log(this)
  this.setState({text:text})
}


// For which word is selected from FlatList
whichSelected(thing){
  console.log(thing)
  console.log(this.props)
  // this.setState({text:thing})
}

// Load Data In Flatlist
sendMedals(dataSource){
    // console.log(dataSource)
      let textHolder = []
 // Set the number of responses from API here
       for (var i =0; i-15;i++){
        let temp = <Text>dataSource[i]</Text>
        textHolder.push(dataSource[i])
      }
    return textHolder
  }

componentDidMount(){
  // Load data fpr API-reqiest/fetch
 let URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/archetypes/character.json'
  // let KeyWord = 'sculpture materials'
  return fetch(URL)  
  // return fetch(this.props.URL)  
    .then((response) => response.json())
    .then((responseJson) => {
        // console.log(responseJson['sculpture materials'])


        this.setState({
          isLoading: false,
          dataSource: responseJson['characters'],
          // URL:URL
        }, function(){
        console.log(this.state)
      console.log(this.props)





        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }




  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

       // <RootStack />
 // Whole Container View
// let theResponses = this.props.ScreenProps.allResponses

      <View style={{flex: 1}}>

      <View style={{flex: .5, height: 50, paddingTop:50}}>
    <Text style = {{fontSize: 26}}> {this.props.Prompt}</Text>
      </View>
      <View style={{flex:.75, paddingTop:0, }}>
        <Text style = {{fontSize:45}}>{this.props.ScreenProps.allResponses[this.props.ScreenProps.allResponses.length-1]}</Text>

      </View>



      <View style={{flex: 3, marginBottom:25, backgroundColor:"#fffff8"}}>
      {console.log(this.props.ScreenProps )
      }
      <FlatList
          data={this.sendMedals(this.state.dataSource)}
          renderItem={({item}) => <TouchableHighlight style = {ScreenStyles.things} onPress={()=> this.props.ScreenProps.addResponse(item.name)}><Text>{item.name}</Text></TouchableHighlight>}
          keyExtractor={(item, index) => index.toString()}
        />
      
      </View>
            <Button
            raised
            large
            buttonStyle = {ScreenStyles.beginButton}
            title="Next"
            onPress={() => 
              // {console.log(this.props)}
              this.props.ScreenProps.navigation.navigate('End')
              

            }
        />
  
      </View>



    );
  }
}


/*STYLE COMPONENTS */
const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeText: {
    color: '#fffff8'
  },

  title: {
  
    fontSize: 36,
    fontFamily: 'System'
  },
beginButton:{
  width: width,
  height: 200,
  backgroundColor: "rgb(119, 20, 39))"
},
  things: {
       alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 15
    // borderBottomColor: 'white',
    // borderBottomWidth: 12,
    // backgroundColor: "#0C385F"
    // border: '2px solid red'
  }
});
