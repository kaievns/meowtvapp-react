import React, {View} from "react-native";
import styles from "./styles";
import SearchBar from "./components/search_bar";
import SearchResults from "./components/search_results";

export default class MeowTVApp extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <SearchBar />
        <SearchResults />
      </View>
    );
  }
}
