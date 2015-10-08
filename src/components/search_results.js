import React from "react-native";
import GridView from "react-native-grid-view";
import styles from "../styles.js";

let {View, Text} = React;

export default class SearchResults extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    }
  }

  render() {
    return (
      <GridView
        items={this.state.movies}
        itemsPerRow={3}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem(item) {
    return (
      <View style={styles.thumb}>
        <Text>{item}</Text>
      </View>
    );
  }
}
