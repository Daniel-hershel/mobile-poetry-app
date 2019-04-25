import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#392F2F',
  secondary: '#FCE38A',
  tertiary: '#5DA6A7',
  red: '#BB0029',
  cream: '#F2E8C6',
  orange:'#F5841A'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 27,
  lg: 42,
  xl: 45,
  primary: 'Cochin',
  avenirBold:'AvenirNext-Bold',

}

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  screenContainer:{
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection:'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  promptHolder:{
    flex: 1,
    paddingTop: 50
  },

  responseHolder:{
    flex: 2,
    width: Dimensions.get('window').width-22,
    // width: Dimensions.get('window').width-220,
    backgroundColor: colors.secondary,
    // height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  
  optionsHolder: {
    // height: 400,
    flex: 4,

  },

  buttonHolder:{
    flex: 1,
  
  },
  header: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    textAlign: 'center',
    color: colors.secondary
  },

optionsText:{
  fontSize: fonts.md,
  color: colors.primary,
},
touchable: {
  alignItems: 'center',
backgroundColor: colors.secondary,
margin:9,
padding: 5,
},

  selected: {
    fontSize:fonts.lg,
    fontFamily: fonts.primary,

  },

next:{
  width: Dimensions.get('window').width,
  // height: 120,
  backgroundColor: "rgba(119, 20, 39, .1))",
  zIndex:-1

}

});