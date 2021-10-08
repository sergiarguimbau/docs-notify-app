import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.screenContainer}>
        <Text>Docs Notify</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F3F3F3',
    flex: 1,
  },
  screenContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 16,
  }
});

export default App;