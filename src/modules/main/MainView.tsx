import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';

import { Toolbar } from '../../components';
import { colors } from '../../styles';
import { DocumentType } from '../../data/types'

export type MainProps = {
  children?: React.ReactNode;
  documentsData?: DocumentType[],
  fetchDocumentsData?: () => void;
};

const MainView = (props: MainProps) => { 

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
      <Toolbar title={'Documents'} iconName={'bell-outline'} />
      <View style={styles.screenContainer}>
        <ScrollView>
          <Button title={'Update'} onPress={() => props.fetchDocumentsData?.()} />
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