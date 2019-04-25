import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'
import {dimensions, fonts, colors} from './ScreenStyles.js'

export default class Home extends React.Component {
  render() {
    return (
        <ImageBackground source={require('../../assets/prism.png')} style={{flex: 1,flexDirection:'column',  alignItems: 'center',width: '100%', height: '100%'}}>
        <View style = {styles.container}>
        <Text style={styles.header}>GUIDED</Text>
        <Text style={styles.header}>POETRY</Text>
        </View>
        <View style={styles.buttonHolder}>
          <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="START"
            fontSize = {100}
            fontFamily= {fonts.avenirBold}
            color = {colors.primary}
            onPress={() =>
             this.props.navigation.navigate('ScreenOne')
         }
        />
        </View>
</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize: 60,
    color: colors.cream,
    fontFamily: fonts.avenirBold
    // flex:1
  },
  buttonHolder:{
  flex: 1
  },
beginButton:{
  width: dimensions.fullWidth,
  height: 200,

  // flex:1,
  backgroundColor: colors.cream
},
})