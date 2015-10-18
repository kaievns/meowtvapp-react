import React, {WebView, ActivityIndicatorIOS} from "react-native";
import YouTube from "react-native-youtube";
import styles from "../styles";

export default class PlayerVideo extends React.Component {
  render() {
    return (
      // <ActivityIndicatorIOS style={styles.locker} />
      <WebView
        html={this.pageHtml(this.props.videoId)}
        javaScriptEnabledAndroid={true}
        automaticallyAdjustContentInsets={false}
        onNavigationStateChange={this.onNavigationStateChange}
        style={{flex: 1, alignSelf: 'stretch', width: 600}}
      />
    );
  }

  onNavigationStateChange(e) {
    console.log("naviaged: ", e);
  }

  pageHtml(video_id) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
        body { margin: 0; width:100%%; height:100%%;  background-color:#000000; }
        html { width:100%%; height:100%%; background-color:#000000; }

        .embed-container iframe,
        .embed-container object,
        .embed-container embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%% !important;
            height: 100%% !important;
        }
        </style>
      </head>
      <body>
        <div class="embed-container">
            <div id="player"></div>
        </div>
        <script src="https://www.youtube.com/iframe_api"></script>
        <script>
        var player;
        var error = false;

        YT.ready(function() {
            player = new YT.Player('player', {
              videoId: '${video_id}',
              playerVars: {
                rel:         0,
                autoplay:    1,
                controls:    1,
                fs:          0,
                autohide:    1,
                playsinline: 1
              },
              events: {
                onReady: function() { alert('ready!'); },
                onError: onPlayerError,
                onStateChange: onStateChange
              }
            });
            player.setSize(window.innerWidth, window.innerHeight);
        });

        function onReady(event) {
            window.location.href = 'ytplayer://onReady?data=' + event.data;
        }

        function onStateChange(event) {
            if (!error) {
                window.location.href = 'ytplayer://onStateChange?data=' + event.data;
            }
            else {
                error = false;
            }
        }

        function onPlayerError(event) {
            if (event.data == 100) {
                error = true;
            }
            window.location.href = 'ytplayer://onError?data=' + event.data;
        }
        </script>
      </body>
      </html>
    `;
  }
}
