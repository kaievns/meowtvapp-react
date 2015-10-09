import React, {View, Text, Image} from "react-native";
import styles from "../styles.js";

export default class VideoEntry extends React.Component {
  render() {
    let video = this.props.video;

    return (
      <View style={styles.video}>
        <Image style={styles.thumb} source={{uri: video.thumb}} />
        <Text style={styles.title}>{video.title.slice(0, 10)}</Text>
      </View>
    )
  }
}
