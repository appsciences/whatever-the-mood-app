import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import FadeIn from '@expo/react-native-fade-in-image';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import { MaterialIcons } from '@expo/vector-icons';

import Layout from '../constants/Layout';
import { RegularText, BoldText } from './StyledText';
import formatTime from '../util/formatTime';

export default class ActivityListItem extends React.Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.item !== this.props.item;
  }

  render() {
    let {
      smallLogo,
      name,
        summary,
        description
    } = this.props.item;

    const dot =

        <View style={styles.availableDotContainer}>
          <FadeIn placeholderStyle={{backgroundColor: Platform.OS === 'android' ? 'transparent' : '#eee'}}>
            <MaterialIcons name="fiber-manual-record" size={20} color={this.props.index % 3 ? "green" : "gray"} style={{
              margin: 0
            }}/>
          </FadeIn>
        </View>;


    return (
      <TouchableNativeFeedback
        onPress={this.props.type !== 'community' ? this.props.onPress : undefined}
        delayPressIn={80}
        style={styles.container}
        fallback={TouchableHighlight}
        underlayColor="#ccc">

        {this.props.type !== 'community' && dot}

        <View style={styles.logoContainer}>
          <FadeIn placeholderStyle={{backgroundColor: Platform.OS === 'android' ? 'transparent' : '#eee'}}>
            <Image
                resizeMode="contain"
                source={smallLogo}
                style={styles.logo}
            />
          </FadeIn>
        </View>

        <View style={styles.infoContainer}>
          <RegularText style={styles.name}>
            {name}
          </RegularText>

          <RegularText style={styles.hours}>
            {this.props.type === 'community' ? summary : this._renderHoursText()}
          </RegularText>

          <RegularText style={styles.address}>
            {this.props.type === 'community' ? description : this._renderAddressText()}
          </RegularText>
        </View>

        {this.props.type !== 'community' &&
        <View style={styles.buttonContainer}>
          <MaterialIcons name="chevron-right" size={40} color="#b8c3c9" />
        </View>}
      </TouchableNativeFeedback>
    );
  }

  _renderHoursText() {
    let {
      isOpen,
      openingTimeToday,
      closingTimeToday,
    } = this.props.item;

    if (openingTimeToday && closingTimeToday) {
      return `${formatTime(openingTimeToday)} - ${formatTime(closingTimeToday)} (${isOpen ? 'Open' : 'Closed'})`
    } else {
      return 'Hours not available';
    }
  }

  _renderAddressText() {
    let {
      address,
      distance,
      direction,
    } = this.props.item;

    let addressText = address;

    if (distance) {
      addressText = `${addressText} (${distance}`
    }

    return addressText;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: Platform.OS === 'android' ? 1 : StyleSheet.hairlineWidth,
    width: Layout.window.width,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 16,
  },
  hours: {
    fontSize: 12,
  },
  address: {
    fontSize: 12,
  },
  logoContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 7,
    marginRight: 10
  },
  availableDotContainer: {
    width: 20
  },
  logo: {
    width: 60,
    height: 60,
  },
  buttonContainer: {
    paddingRight: 5,
  },
});
