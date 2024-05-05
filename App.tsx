/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  return (
    <WebView source={{uri: 'https://www.yogabars.in/'}} style={{flex: 1}} />
  );
}

export default App;
