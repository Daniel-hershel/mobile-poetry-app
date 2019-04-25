import React, { Component } from 'react';

import { 
  ActivityIndicator, Dimensions, FlatList, TouchableHighlight, ScrollView, StyleSheet, Text, Image, View 
} from 'react-native';


import { Provider } from 'react-redux';


// import { createAppContainer } from 'react-navigation';
import AppContainer from './AppNavigator';
import {store} from './app/duck/redux.js'

let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height; //full height 

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      localResponses: []
    }
  }

  addLocalResponse = (localResponse)=> {
    const {
      localResponses
      } = this.state
      // console.log(localResponse)
      localResponses.push(localResponse)
      // console.log(localResponses)
      
      this.setState({
        localResponses
      })

  }

  render() {
    return (
      <Provider store = { store }>
     <AppContainer
       screenProps = {{
        localResponses: this.state.localResponses,
        addLocalResponse: this.addLocalResponse,

       }}
     />
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
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