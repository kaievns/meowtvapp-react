import React from "react-native";
import Reflux from "reflux";
import Actions from "../actions";
import VideosStore from "../stores/videos_store";
import VideosList from "./videos_list";

export default class SearchResults extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.refluxHook = Reflux.listenTo(VideosStore, function(videos) {
      console.log("loaded!", videos.length);
      this.setState({videos: videos});
    });
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
    let videos = this.state.videos || [];

    return <VideosList videos={videos} />;
  }
}
