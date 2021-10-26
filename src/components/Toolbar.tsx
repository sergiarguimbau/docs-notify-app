import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../styles'

type ToolbarProps = {
  title: string,
  iconName?: string,
  iconBubbleNumber?: number,
  onPressIcon?: () => void;
};

const Toolbar = (props: ToolbarProps) => { 
  return (
    <View style={styles.toolbarContainer}>
      <Text style={styles.toolbarTitleText}>{props.title}</Text>
      {props.iconName && (
        <TouchableOpacity style={styles.toolbarIconContainer} onPress={props.onPressIcon}>
          <MaterialCommunityIcon
            name={props.iconName}
            color={colors.black}
            size={20}
          />
          {(props.iconBubbleNumber! > 0) && (
            <View style={styles.toolbarIconBubbleContainer}>
              <Text style={styles.toolbarIconBubbleText}>{props.iconBubbleNumber}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  toolbarContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolbarTitleText: {
    color: colors.textDark,
    fontSize: 22,
    fontWeight: 'bold',
  },
  toolbarIconContainer: {
    height: 40, 
    width: 40, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4, 
    borderWidth: 1, 
    borderColor: colors.borderLight,
  },
  toolbarIconBubbleContainer: {
    backgroundColor: colors.secondary, 
    position: 'absolute', 
    bottom: 20, 
    left: 16, 
    minWidth: 16,
    padding: 2,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: colors.white,
  },
  toolbarIconBubbleText: {
    color: colors.textLight, 
    fontSize: 7,
  },
});

export default Toolbar;