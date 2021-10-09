import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

export type MainProps = {
  children?: React.ReactNode;
  appCounter?: number,
  incrementAppCounter?: () => void;
};

const MainView = (props: MainProps) => { 

  useEffect(() => {
    // Increment app counter for every cold app launch (just for testing)
    props.incrementAppCounter?.();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.screenContainer}>
        <Text>{'App Count: ' + props.appCounter}</Text>
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

export default MainView;