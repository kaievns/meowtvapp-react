import React, {View, Text, TouchableHighlight} from "react-native";
import styles from "../styles";

export default class PlayerTitle extends React.Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <TouchableHighlight onPress={this.props.onBack} style={{alignSelf: 'flex-start'}}>
          <Text style={styles.searchBarButtonLeft}>&lt; Back</Text>
        </TouchableHighlight>
        <Text style={styles.searchBarTitle}>{this.props.children}</Text>
      </View>
    )
  }
}
