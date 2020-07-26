/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/*
Screen 2
contribution: Tiến, Long
DayStart: 25/7/2020 (Tiến)
Main Function: export Screen02.
sub function: UI of Screen2 in Screen2.Js

*/
import * as React from 'react';
import {View, StyleSheet} from 'react-native';

// You can import from local files
import Screen2 from './screen/Screen2';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen2 />
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
});
