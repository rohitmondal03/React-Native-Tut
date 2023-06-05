import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = {
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },    
}


export default App;
