import React, { useRef } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  const webViewRef = useRef(null);

  const handleFullScreen = () => {
    // JavaScript code to trigger full-screen mode on your website
    const script = `
      // Assuming your website has a function to go full screen
      // You may need to customize this based on your website's implementation
      document.querySelector('.full-screen-button').click();
    `;

    // Execute the JavaScript code in the WebView
    webViewRef.current.injectJavaScript(script);
  };

  return (
    <View style={styles.container}>
      {/* Add StatusBar to get the status bar's height */}
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />

      {/* Apply padding to the top to avoid overlapping */}
      <View style={styles.webContainer}>
        <WebView
          ref={webViewRef}
          source={{ uri: 'https://innerCalm.netlify.app' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0, // Use StatusBar's height if available
  },
});

export default App;
