import Reflux from "reflux";
import Actions from "../actions";
import Token from "./secret_token"; // gitignored for maximum security

const URL = "https://www.googleapis.com/youtube/v3/search?"+
  "part=snippet&maxResults=50&type=video&fields=items(id(videoId)%2Csnippet(title%2Cthumbnails(default)))"+
  "&key="+Token;

export default Reflux.createStore({
  listenables: [Actions],

  async onFetchVideos(query) {
    try {
      let url      = URL + "&q="+ this.escapeQuery(query || "");
      let response = await fetch(url);
      let data     = await response.json();
      let videos   = this.extractVideosList(data);

      this.trigger(videos);
    } catch(e) {
      console.log("FAILED: loading videos", e);
    }
  },

  escapeQuery(text) {
    return encodeURIComponent(text.toLowerCase());
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
