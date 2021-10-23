import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';

import { Toolbar } from '../../components';
import { colors } from '../../styles';
import { DocumentType } from '../../data/types'

export type MainProps = {
  children?: React.ReactNode;
  appCounter?: number,
  documentsData?: DocumentType[],
  incrementAppCounter?: () => void;
};

const MainView = (props: MainProps) => { 

  useEffect(() => {
    // Increment app counter for every cold app launch (just for testing)
    props.incrementAppCounter?.();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
      <Toolbar title={'Documents'} iconName={'bell-outline'} />
      <View style={styles.screenContainer}>
        <ScrollView>
          <Text>{JSON.stringify(props.documentsData, null, 2)}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  screenContainer: {
    backgroundColor: colors.backgroundLight,
    flex: 1,
    padding: 16,
  }
});

export default MainView;