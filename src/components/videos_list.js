import React from "react-native";
import GridView from "react-native-grid-view";
import styles from "../styles.js";
import VideoEntry from "./video_entry";

export default class VideosList extends React.Component {
  constructor() {
    super();
    this.renderItem = this.renderItem.bind(this);
  }

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
    return <VideoEntry video={video} onSelect={()=> this.onSelect(video)} />;
  }

  onSelect(video) {
    console.log("selected", video);

    // this.props.navigator.push({
    //   title: video.title,
    //   component: VideoScreen,
    //   passProps: {video: video}
    // })
  }
}
