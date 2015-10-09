import React from "react-native";
import GridView from "react-native-grid-view";
import styles from "../styles.js";
import VideoEntry from "./video_entry";

export default class VideosList extends React.Component {
  render() {
    let videos = this.props.videos || [];

    return (
      <GridView
        style={styles.videosList}
        items={videos}
        itemsPerRow={4}
        renderItem={this.renderItem}
      />
    )
  }

  renderItem(video) {
    return <VideoEntry video={video} />;
  }
}
