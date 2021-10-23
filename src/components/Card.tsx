import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
  Platform,
} from 'react-native';

import { colors } from '../styles'

type CardProps = {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[],
  elevation?: number,
  onPress?: () => void;
};

const Card = (props: CardProps) => { 

  const platformElevation = Platform.OS === 'ios' ? props.elevation! / 2 : props.elevation;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.cardContainer, props.style, {
        // iOS shadow
        shadowOffset: {width: 0, height: platformElevation || 1},
        shadowRadius: platformElevation || 1,
        shadowOpacity: 0.15,

        // Android shadow
        elevation: platformElevation || 1,
      }]}>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 4,
  },
});

export default Card;