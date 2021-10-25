import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../styles'

type FooterButtonProps = {
  title: string,
  iconName?: string,
  onPress?: () => void;
};

const FooterButton = (props: FooterButtonProps) => { 

  return (
    <View style={styles.footerButtonMainContainer}>
      <TouchableOpacity style={styles.footerButtonContainer} onPress={props.onPress}>
        <View style={styles.footerButtonIconTextContainer}>
          {props.iconName && (
            <MaterialCommunityIcon
              name={props.iconName}
              color={colors.white}
              size={20}
            />
          )}
          <View style={styles.footerButtonTitleTextContainer}>
            <Text style={styles.footerButtonTitleText} numberOfLines={1}>{props.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerButtonMainContainer: {
    padding: 16,
    borderTopWidth: 1, 
    borderTopColor: colors.borderLight, 
  },
  footerButtonContainer: {
    backgroundColor: colors.secondary, 
    paddingVertical: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8,
  },
  footerButtonIconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButtonTitleTextContainer: {
    marginStart: 4,
  },
  footerButtonTitleText: {
    color: colors.textLight, 
    fontWeight: 'bold',
  },
});

export default FooterButton;