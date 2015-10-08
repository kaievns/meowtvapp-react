import React from "react-native";
import styles from "./styles";
import SearchResults from "./components/search_results";
let {Text, View} = React;

export default class MeowTVApp extends React.Component {
  render() {
    return (
      <SearchResults style={styles.container}>

      </SearchResults>
    );
  }
}
