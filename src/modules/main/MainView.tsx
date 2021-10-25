import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ListRenderItem,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Toolbar, Card } from '../../components';
import { colors } from '../../styles';
import { DocumentType } from '../../data/types'

export type MainProps = {
  children?: React.ReactNode;
  documentsData?: DocumentType[],
  fetchDocumentsData?: () => void;
};

const MainView = (props: MainProps) => { 

  const LIST_MODE = {
    LIST: 1,
    GRID: 2,
  };

  const [listMode, setListMode] = useState(LIST_MODE.LIST);
  const [isRefreshingDocuments, setIsRefreshingDocuments] = useState(false);

  const onRefreshDocuments = async () => {
    setIsRefreshingDocuments(true);
    await props.fetchDocumentsData?.();
    setIsRefreshingDocuments(false);
  }
  
  const LIST_MARGIN = 16;
  const screenWidth = Dimensions.get('window').width - LIST_MARGIN * 2;
  const cardWidth = screenWidth / listMode - (LIST_MARGIN / 2) * (listMode - 1);

  const renderDocumentItem: ListRenderItem<DocumentType> = ({item}) => (
    <Card elevation={4} style={[styles.documentItemContainer, {width : cardWidth} ]}>
      <View style={(listMode === LIST_MODE.LIST) ? styles.row : undefined}>
        <View style={styles.documentItemTitleContainer}>
          <Text style={styles.documentItemTitleText} numberOfLines={1}>{item.Title}</Text>
        </View>
        <View style={(listMode === LIST_MODE.LIST) ? styles.documentItemVersionListContainer : styles.documentItemVersionGridContainer}>
          <Text style={styles.documentItemVersionText} numberOfLines={1}>{'Version ' + item.Version}</Text>
        </View>
      </View>
      {(listMode === LIST_MODE.LIST) && (
        <View style={styles.documentItemInfoListContainer}>
          <View style={styles.flex}>
            <View style={styles.row}>
              <MaterialCommunityIcon
                name={'account-group-outline'}
                color={colors.darkGray}
                size={20}
              />
              <View style={{paddingStart: 8}}>
                <Text style={styles.documentItemTitleText}>{'Contributors'}</Text>
              </View>
            </View>
            <FlatList
              listKey={JSON.stringify(item.Contributors)}
              data={item.Contributors}
              renderItem={({item}) => <Text style={styles.documentItemVersionText}>{item.Name}</Text>}
              keyExtractor={item => `${item.ID}`}
              ItemSeparatorComponent={() => <View style={{height: 8}}/>}
              ListHeaderComponent={() => <View style={{height: 8}}/>}
            />
          </View>
          <View style={styles.flex}>
            <View style={styles.row}>
              <MaterialCommunityIcon
                name={'link-variant'}
                color={colors.darkGray}
                size={20}
              />
              <View style={{paddingStart: 8}}>
                <Text style={styles.documentItemTitleText}>{'Attachments'}</Text>
              </View>
            </View>
            <FlatList
              listKey={JSON.stringify(item.Attachments)}
              data={item.Attachments}
              renderItem={({item}) => <Text style={styles.documentItemVersionText}>{item}</Text>}
              keyExtractor={(item, index) => `${item}-${index}`}
              ItemSeparatorComponent={() => <View style={{height: 8}}/>}
              ListHeaderComponent={() => <View style={{height: 8}}/>}
            />
          </View>
        </View>   
      )}
    </Card>
  );

  const renderListToolsItem = () => (
    <View style={styles.listToolsContainer}>
      <View style={styles.listToolContainer}>
        <TouchableWithoutFeedback onPress={() => setListMode(LIST_MODE.LIST)}>
          <View style={[styles.listToolIcon, (listMode === LIST_MODE.LIST) ? {backgroundColor: colors.white} : {backgroundColor: colors.backgroundLight} ]}>
            <MaterialCommunityIcon
              name={'format-list-bulleted'}
              color={(listMode === LIST_MODE.LIST) ? colors.secondary : colors.darkGray}
              size={20}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setListMode(LIST_MODE.GRID)}>
          <View style={[styles.listToolIcon, (listMode === LIST_MODE.GRID) ? {backgroundColor: colors.white} : {backgroundColor: colors.backgroundLight} ]} >
            <MaterialCommunityIcon
              name={'grid-large'}
              color={(listMode === LIST_MODE.GRID) ? colors.secondary : colors.darkGray}
              size={20}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.primary}/>
      <Toolbar title={'Documents'} iconName={'bell-outline'} />
      <View style={styles.screenContainer}> 
        <FlatList
          key={listMode}
          numColumns={listMode}
          data={props.documentsData}
          renderItem={renderDocumentItem}
          onRefresh={() => onRefreshDocuments()}
          refreshing={isRefreshingDocuments}
          keyExtractor={item => `${item.ID}`}
          columnWrapperStyle={(listMode === LIST_MODE.GRID) ? {justifyContent: 'space-between'} : undefined}
          contentContainerStyle={{padding: LIST_MARGIN}}
          ItemSeparatorComponent={() => <View style={{height: LIST_MARGIN}}/>}
          ListHeaderComponent={renderListToolsItem}
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

  // Document Item
  documentItemContainer: {
    padding: 16, 
  },
  documentItemTitleContainer: {
    flexShrink: 1, // wrap text inside View
  },
  documentItemTitleText: {
    color: colors.textDark,
    fontSize: 14, 
    fontWeight: 'bold',
  },
  documentItemVersionListContainer: {
    paddingStart: 8, 
    justifyContent: 'flex-end',
  },
  documentItemVersionGridContainer: {
    paddingTop: 8,
  },
  documentItemVersionText: {
    color: colors.textGray,
    fontSize: 12,
  },
  documentItemInfoListContainer: {
    paddingTop: 8,
    flexDirection: 'row', 
  },

  // List Tools
  listToolsContainer: {
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listToolContainer: {
    height: 40, 
    width: 120, 
    flexDirection: 'row',
    borderRadius: 4, 
    borderWidth: 1, 
    borderColor: colors.borderLight,
  },
  listToolIcon: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 4,
  },

  // Common
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  }
});

export default MainView;