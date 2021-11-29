import { StatusBar } from "expo-status-bar";
import React from "react";
import RootStack from "./src/navigators/RootStack";

const App = () => {
  return (
    <>
      <StatusBar style="auto" animated />
      <RootStack />
    </>
  );
};

export default App;
