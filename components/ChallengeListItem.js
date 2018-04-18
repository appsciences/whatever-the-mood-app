import React from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    TouchableHighlight,
} from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';

import Layout from '../constants/Layout';

export default props =>

    <TouchableNativeFeedback
        onPress={props.onPress}
        delayPressIn={80}
        style={styles.container}
        fallback={TouchableHighlight}
        underlayColor="#ccc">
      <Text style={styles.text}>{props.item.name}</Text>
      <Text style={styles.points}>{props.item.points}</Text>
    </TouchableNativeFeedback>


const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: Platform.OS === 'android' ? 1 : StyleSheet.hairlineWidth,
    width: Layout.window.width,
    margin: 10
  },
  text: {fontFamily: 'Quicksand-Bold',
    fontSize: 18,
  },
  points: {
    fontSize: 12,
    color: 'grey'
  }

});
