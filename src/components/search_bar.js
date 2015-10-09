import React, {View, TextInput} from "react-native";
import Actions from "../actions";
import styles from "../styles";

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state   = {value: "video for cats"};
    this.changed = this.changed.bind(this);
    this.changed(); // kicking the default search right away
  }

  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          keyboardType="web-search"
          onChangeText={(text) => this.setState({value: text})}
          onSubmitEditing={this.changed}
          value={this.state.value} />
      </View>
    )
  }

  changed() {
    Actions.fetchVideos(this.state.value);
  }
}
