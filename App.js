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


<<<<<<< HEAD
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        This is the default application screen.
      </Text>
    </View>
=======
import ProjectList from './src/screens/core/user_joining/ProjectList'

const App = () => {
  return (
    <ProjectList/>
>>>>>>> 64828957a4e3bcb7c605ffe5e9649576fec90789
  );
}

<<<<<<< HEAD
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
=======
export default App;
>>>>>>> 64828957a4e3bcb7c605ffe5e9649576fec90789
