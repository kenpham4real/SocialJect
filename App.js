/*
* Where the application begins.
* Contributors: {
  Hiển Long: 17 June
}
*
*
* Changelog: {
  17 June: Changed the default beginning code of react native to be more easy to read.
}
*/


import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        This is the default application screen.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;