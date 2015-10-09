import React from "react-native";

export default React.StyleSheet.create({
  container: {
    flex:            1,
    justifyContent:  'center',
    alignItems:      'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize:  20,
    textAlign: 'center',
    margin:    10,
  },
  instructions: {
    textAlign:    'center',
    color:        '#333333',
    marginBottom: 5,
  },
  videosList: {
    flex: 1,
    backgroundColor: "#333333"
  },
  video: {
    width: 150,
    height: 100,
    margin: 5
  },
  thumb: {
    flex: 1
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white'
  }
});
