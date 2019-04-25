import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {bindActionCreators} from 'redux';
import {addResponse} from '../duck/redux.js';
import { connect } from 'react-redux';
import {colors, fonts, padding, dimensions} from  "./ScreenStyles.js";
import { Font } from 'expo';
 class End extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {

    await Font.loadAsync({
      'Dosis': require('./resources/Dosis-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.holderOne}>
        <Text style={styles.header}>I am done being the {this.props.responsesReducer.allResponses[0].toLowerCase()}</Text>
        {/* <Text style={styles.header}>{this.props.responsesReducer.allResponses[0].toLowerCase()}</Text> */}
  </View>
      <View style={styles.holderTwo}>
        <Text style={styles.header}>I am shedding</Text>
        <Text style={styles.header}>{this.props.responsesReducer.allResponses[1].toLowerCase()}</Text>
        </View>
      <View style={styles.holderThree}>
        <Text style={styles.header}>I am becomming</Text>
        <Text style={styles.header}>{this.props.responsesReducer.allResponses[2].toLowerCase()}</Text>
      </View>
      <View style={styles.buttom}>

        <Button
          
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
      </View>
    );
  }
}
/*STYLE COMPONENTS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 15,
    justifyContent: 'center',
  },
  holderOne: {
    flex:2,
    width:'100%',
    backgroundColor:'#BB0029',
    justifyContent: 'center',
    alignItems: 'center'


  },
  holderTwo: {
    flex:2,
    width:'100%',
    backgroundColor: '#F2E8C6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  holderThree: {
    flex:2,
    width:'100%',
    // backgroundColor: '#FA5555'
    backgroundColor:'#F5841A',
    justifyContent: 'center',
    alignItems: 'center'

  },
  button:{
    flex:1
  },
  header:{
    fontSize:fonts.xl,
    color: '#03002C',
    fontFamily: 'AvenirNext-Bold',
    // fontWeight: '900'

  }

});


const mapStateToProps = (state) =>{
  const {responsesReducer} = state 
  return {responsesReducer}

}
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addResponse,
   }, dispatch)

  );

export default connect(mapStateToProps, mapDispatchToProps)(End);