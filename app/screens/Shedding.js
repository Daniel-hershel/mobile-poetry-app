import React, { Component } from 'react';

export default class Shedding extends React.Component {
      constructor(props){
    super(props);
    this.state ={ 
      response:" "

    }
  // this.promptHandler = this.promptHandler.bind(this)
  }

  localPromptHandler= (e) => {
  console.log(e)
    // e.preventDefault()
    this.setState({
      response:e
      // responses:[...this.state.responses, newResponse]
    })
  }
  render (){
    return(
// next: how can I pass the url and key work as props to the component to set it up for the specfic screen>
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
  
  <PromptSelectors
     promptHandler = {this.localPromptHandler}
     Prompt= 'I am shedding...'
     KeyWord = 'sculpture materials'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/sculpture-materials.json'

  > </PromptSelectors>
         <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Next"
            onPress={() =>{
             this.props.navigation.navigate('DoneBeing')
             // this.props.promptHandler()
           }}
        />
    </View>
      )
  }
}