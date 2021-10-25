import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ListRenderItem,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../styles'

type TextListProps = {
  title?: string,
  iconName?: string,
  data?: Object[],
  textProp?: string,
  keyProp?: string,
  listMargin?: number,
};

const TextList = (props: TextListProps) => { 

  const LIST_MARGIN = props.listMargin || 0;

  const _keyExtractor = (item: any, index: number) => {
    return (props.keyProp) ? `${item[props.keyProp]}` : `${item}-${index}`;
  }

  const renderItemSeparator = () => <View style={{height: LIST_MARGIN}} />

  const renderItemText: ListRenderItem<any> = ({item}) => (
    <Text style={styles.textListItemText}>{props.textProp ? item[props.textProp] : item}</Text>
  );

  return (
    <View style={styles.textListMainContainer}>
      <View style={styles.textListIconTextContainer}>
        {props.iconName && (
          <MaterialCommunityIcon
            name={props.iconName}
            color={colors.darkGray}
            size={20}
          />
        )}
        {props.title && (
          <View style={props.iconName ? styles.textListTitleTextContainer : undefined}>
            <Text style={styles.textListTitleText}>{props.title}</Text>
          </View>
        )}
      </View>
      <FlatList
        listKey={JSON.stringify(props.data)}
        data={props.data}
        renderItem={renderItemText}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={renderItemSeparator}
        ListHeaderComponent={renderItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textListMainContainer: {
    flex: 1,
  },
  textListIconTextContainer: {
    flexDirection: 'row',
  },
  textListTitleTextContainer: {
    paddingStart: 8
  },
  textListTitleText: {
    color: colors.textDark,
    fontSize: 13, 
    fontWeight: 'bold',
  },
  textListItemText: {
    color: colors.textGray,
    fontSize: 13,
  },
});

export default TextList;