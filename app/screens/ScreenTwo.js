// 0:a. Importat React from 'react' -- python style I think?
import React, { Component } from 'react';

import {PropTypes} from 'prop-types';
// 0.b. Import the big three modules(?) from RNative from React 1. StyleSheet 2.Text 3.View--prolly more than three well maybe those are a big three
import { 
  ActivityIndicator, Dimensions, FlatList, ImageBackground,TouchableHighlight, ScrollView, StyleSheet, Text, Image, View 
} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import { Button } from 'react-native-elements'

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addResponse} from '../duck/redux.js';
import {ScreenStyles,colors, fonts, padding, dimensions} from  "./ScreenStyles.js";

let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height; //full height   

 class PromptTwo extends React.Component {
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
  this.setState({text:text})
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



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

// Screen Display Container
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
    renderItem={({item}) => <TouchableHighlight style = {ScreenStyles.touchable} onPress={()=>{ this.props.ScreenProps.screenProps.addLocalResponse(item)
    this.updateText(item) 
  }}><Text style={ScreenStyles.optionsText}>{item}</Text></TouchableHighlight>}
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
        this.props.ScreenProps.navigation.navigate('ScreenThree')
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

// Screen Logic Container
export class ScreenTwo extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    return(
      <ImageBackground source={require('../../assets/prism.png')} style={{width: '100%', height: '100%'}}>
  
    <PromptTwo
      Prompt= 'I am shedding...'
      KeyWord = 'sculpture materials'
      URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/sculpture-materials.json'
      ScreenProps = {this.props}
  > </PromptTwo>
     
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


