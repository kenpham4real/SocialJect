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
import MainNavigator from './src/navigation/core/MainNavigator';

const App = () => {
  return (
    <MainNavigator/>
  );
}


export default App;
