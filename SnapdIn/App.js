import React from "react";
import { Font } from "expo-font";
import { Text } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import Routes from "./src/Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }



  render() {
    if (this.state.loading) {
      return <Text>Wait Loading</Text>;
    }
    return <Routes />;
  }
}

EStyleSheet.build({
  $primaryColor: "#fff"
});

export default App;
