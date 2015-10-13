import React, {View} from "react-native";
import styles from "../styles";
import SearchBar from "./search_bar";
import SearchResults from "./search_results";
import PlayerScreen from "./player_screen";

export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.onSelect = this.onSelect.bind(this);
  }

  render() {
    return (
      <View style={styles.body}>
        <SearchBar />
        <SearchResults onSelect={this.onSelect} />
      </View>
    );
  }

  onSelect(video) {
    this.props.navigator.push({
      title:     video.title,
      component: PlayerScreen,
      passProps: {video: video}
    })
  }
}
