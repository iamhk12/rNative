import React from 'react';
import { WebView } from 'react-native-webview';

const WebBrowser = ({ url }) => {
  return (
    <WebView source={{ uri: url }} />
  );
};

export default WebBrowser;