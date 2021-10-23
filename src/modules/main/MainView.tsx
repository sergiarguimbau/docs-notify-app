import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ListRenderItem,
  Dimensions,
} from 'react-native';

import { Toolbar, Card } from '../../components';
import { colors } from '../../styles';
import { DocumentType } from '../../data/types'

export type MainProps = {
  children?: React.ReactNode;
  documentsData?: DocumentType[],
  fetchDocumentsData?: () => void;
};

const MainView = (props: MainProps) => { 
  
  const LIST_MARGIN = 16;
  const screenWidth = Dimensions.get('window').width - LIST_MARGIN * 2;
  const cardWidth = screenWidth / 2 - LIST_MARGIN / 2;

  const renderDocumentItem: ListRenderItem<DocumentType> = ({item}) => (
    <Card elevation={4} style={[styles.documentItemContainer, {width : cardWidth} ]}>
      <View style={styles.documentItemTitleContainer}>
        <Text style={styles.documentItemTitleText} numberOfLines={1}>{item.Title}</Text>
      </View>
      <View style={styles.documentItemVersionContainer}>
        <Text style={styles.documentItemVersionText} numberOfLines={1}>{'Version ' + item.Version}</Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.primary}/>
      <Toolbar title={'Documents'} iconName={'bell-outline'} />
      <View style={styles.screenContainer}> 
        <FlatList
          data={props.documentsData}
          numColumns={2}
          renderItem={renderDocumentItem}
          keyExtractor={item => `${item.ID}`}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{padding: LIST_MARGIN}}
          ItemSeparatorComponent={() => <View style={{height: LIST_MARGIN}}/>}
        />
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
  },
  documentItemContainer: {
    padding: 16, 
  },
  documentItemTitleContainer: {},
  documentItemTitleText: {
    color: colors.textDark,
    fontSize: 14, 
    fontWeight: 'bold',
  },
  documentItemVersionContainer: {
    paddingTop: 8,
  },
  documentItemVersionText: {
    color: colors.textGray,
    fontSize: 12,
  },
});

export default MainView;