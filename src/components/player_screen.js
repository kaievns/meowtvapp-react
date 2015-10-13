import React, {View, Text} from "react-native";
import styles from "../styles";

export default class PlayerScreen extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={{color: "white"}}>Blah! {this.props.video.title}</Text>
      </View>
    );
  }
}
