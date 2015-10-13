import React, {View, Text, Image, TouchableHighlight} from "react-native";
import styles from "../styles.js";

export default class VideoEntry extends React.Component {
  render() {
    let video = this.props.video;

    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.video}>
          <Image style={styles.thumb} source={{uri: video.thumb}} />
          <Text style={styles.title}>{video.title.slice(0, 10)}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
