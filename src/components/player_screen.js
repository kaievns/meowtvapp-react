import React, {View, Text} from "react-native";
import PlayerTitle from "./player_title";
import styles from "../styles";

export default class PlayerScreen extends React.Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }

  render() {
    return (
      <View style={styles.body}>
        <PlayerTitle onBack={this.goBack}>{this.props.video.title}</PlayerTitle>
        <Text style={{color: "white"}}>Blah! {this.props.video.title}</Text>
      </View>
    );
  }

  goBack() {
    this.props.navigator.pop();
  }
}
