import React from "react-native";

export default React.StyleSheet.create({
  body: {
    flex:            1,
    flexDirection:   'column',
    justifyContent:  'center',
    alignItems:      'center',
    backgroundColor: '#333333',
  },
  searchBar: {
    height: 50,
    alignSelf: 'stretch',
    justifyContent:  'center',
    alignItems:      'center',
    backgroundColor: "#222222"
  },
  searchInput: {
    alignSelf: 'stretch',
    height:     40,
    marginLeft: 50,
    marginRight: 50,
    paddingLeft: 10,
    backgroundColor: '#444444',
    color: 'white'
  },
  searchBarTitle: {
    color: 'white',
    marginTop: -20,
  },
  searchBarButtonLeft: {
    alignSelf: 'flex-start',
    color: 'white',
    marginLeft: 5,
    marginTop: 0
  },
  videosList: {
    flex: 1,
    alignSelf: 'stretch'
  },
  locker: {
    flex: 1
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
