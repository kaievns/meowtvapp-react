import React, {View, Text} from "react-native";
import GridView from "react-native-grid-view";
import styles from "../styles.js";
import Actions from "../actions";
import VideosStore from "../stores/videos_store";
import Reflux from "reflux";

export default class SearchResults extends React.Component {

  constructor() {
    super();
    this.refluxHook = Reflux.listenTo(VideosStore, function() {
      console.log("loaded!", arguments);
    });

    // this.state = this.refluxHook.getInitialState.apply(this);
    this.state = {movies: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]};
  }

  componentDidMount() {
    this.refluxHook.componentDidMount.apply(this);
    setTimeout(function() {
      console.log("triggering fetch")
      Actions.fetchVideos();
    }, 2000)
  }

  componentWillUnmount() {
    this.refluxHook.componentWillUnmount.apply(this);
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
