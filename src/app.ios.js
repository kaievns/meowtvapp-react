import React, {View} from "react-native";
import styles from "./styles";
import SearchResults from "./components/search_results";

export default class MeowTVApp extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <SearchResults />
      </View>
    );
  }
}
