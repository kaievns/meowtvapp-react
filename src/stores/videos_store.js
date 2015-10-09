import Reflux from "reflux";
import Actions from "../actions";
import Token from "./secret_token";

const KEY = Token;
const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&fields=items(id(videoId)%2Csnippet(title%2Cthumbnails(default)))&key="+KEY;

export default Reflux.createStore({
  listenables: [Actions],

  async onFetchVideos() {
    try {
      let url      = URL + "&q=cat+video";
      let response = await fetch(url);
      let data     = await response.json();
      let videos   = this.extractVideosList(data);

      this.trigger(videos);
    } catch(e) {
      console.log("FAILED: loading videos", e);
    }
  },

  extractVideosList(data) {
    return (data.items || []).map(function (entry) {
      return {
        id:    entry.id.videoId,
        title: entry.snippet.title,
        thumb: entry.snippet.thumbnails.default.url
      };
    });
  }
});
