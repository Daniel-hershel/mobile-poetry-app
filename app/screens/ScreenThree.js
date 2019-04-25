import React, { Component } from 'react';

import { 
  ActivityIndicator, Dimensions, ImageBackground, FlatList, TouchableHighlight, ScrollView, StyleSheet, Text, Image, View 
} from 'react-native';


import { Button } from 'react-native-elements'

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addResponse} from '../duck/redux.js';
import {ScreenStyles,colors, fonts, padding, dimensions} from  "./ScreenStyles.js";

let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height; //full height   

 class PromptThree extends React.Component {
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

    };
  this.componentDidMount = this.componentDidMount.bind(this)
  };


// For Text Input Update
updateText(text){
  // console.log(this)
  this.setState({text:text})
}

componentDidMount(){
    // Load data fpr API-reqiest/fetch
   let URL = this.props.URL
   let KeyWord = this.props.KeyWord
    return fetch(URL)  
      .then((response) => response.json())
      .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson[KeyWord],
            // URL:URL
          }, function(){
        //   console.log(this.state)  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
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

// Render Component
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

 // Screen Display Component
 <View  style={ScreenStyles.screenContainer}>
 {/* Prompt */}
 <View style={ScreenStyles.promptHolder}>
<Text style = {ScreenStyles.header}> {this.props.Prompt}</Text>
 </View>
 {/* Response */}
 <View style={ScreenStyles.responseHolder}>
   <Text style = {ScreenStyles.selected}>{this.state.text}</Text>
 </View>
 {/* Options */}
 <View style={ScreenStyles.optionsHolder}>
 {console.log(this.props)}
 <FlatList
     data={this.sendMedals(this.state.dataSource)}
     renderItem={({item}) => <TouchableHighlight style = {ScreenStyles.touchable} onPress={()=>{ this.props.ScreenProps.screenProps.addLocalResponse(item.color)
     this.updateText(item.color) 
   }}><Text style={ScreenStyles.optionsText}>{item.color}</Text></TouchableHighlight>}
     keyExtractor={(item, index) => index.toString()}
   />
 </View>
 {/* Button */}
 <View style={ScreenStyles.buttonHolder}>

 <Button
       raised
       large
       buttonStyle = {ScreenStyles.next}
       title="Next"
       onPress={() => {
         this.props.ScreenProps.navigation.navigate('End')
         console.log(this.props)
         // console.log('active'+ ' '+ this.props.screenProps.localResponses)
         this.props.ScreenProps.addResponse(this.props.ScreenProps.screenProps.localResponses[this.props.ScreenProps.screenProps.localResponses.length-1])
       }}
   />

 </View>
 </View>
);
}
}

// Screen Logic Component
export class ScreenTwo extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    return(
    // <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
    <ImageBackground source={require('../../assets/prism.png')} style={{width: '100%', height: '100%'}}>
  
  <PromptThree
    Prompt= 'I am becomming...'
    KeyWord = 'colors'
    URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json'
    ScreenProps = {this.props}
  > </PromptThree>
  
    </ImageBackground>
      )
      }
}



const mapStateToProps = state => ({
  addResponse:state.addResponse

})
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addResponse,
   }, dispatch)

  );

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTwo);


