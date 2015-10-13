import React, {View} from "react-native";
import styles from "../styles";
import SearchBar from "./search_bar";
import SearchResults from "./search_results";

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <SearchBar />
        <SearchResults />
      </View>
    );
  }
}
