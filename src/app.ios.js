import React, {NavigatorIOS} from "react-native";
import SearchScreen from "./components/search_screen";

export default class MeowTVApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        navigationBarHidden={true}
        initialRoute={{
          title:    'Search',
          component: SearchScreen,
        }}
      />
    );
  }
}
