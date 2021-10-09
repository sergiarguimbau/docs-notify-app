import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.appContainer}>
          <StatusBar barStyle='dark-content' />
          <View style={styles.screenContainer}>
            <Text>Docs Notify</Text>
          </View>
        </SafeAreaView>
      </PersistGate>
    </Provider>
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