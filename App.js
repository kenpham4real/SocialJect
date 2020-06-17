/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import ProjectList from './src/screens/core/user_joining/ProjectList'

const App = () => {
  return (
    <ProjectList/>
  );
};

export default App;
