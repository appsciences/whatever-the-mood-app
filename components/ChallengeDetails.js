import React from 'react';
import {
    Animated,
    Image,
    Linking,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import { withNavigation } from '@exponent/ex-navigation';

import {
    MaterialIcons,
} from '@exponent/vector-icons';
import Exponent, {
    Components,
} from 'exponent';
import TouchableNativeFeedback from '@exponent/react-native-touchable-native-feedback-safe';
import {
    NavigationBar,
} from '@exponent/ex-navigation';

import {
    BoldText,
    RegularText,
} from './StyledText';
import {
    MapCard,
    DescriptionCard,
    EnterCodeCard,
    SummaryCard,
    InstagramPhotosCard,
    VisitedCard,
} from './DetailCards';


import formatTime from '../util/formatTime';
import Layout from '../constants/Layout';

@withNavigation
export default class ChallengeDetails extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
    code: ''
  }


  render() {
    let { item } = this.props;
    let { scrollY } = this.state;

    return (
        <View style={styles.container}>
          <View style={{flex: 1, marginTop: 0}}>

            <Animated.ScrollView
                scrollEventThrottle={16}
                style={StyleSheet.absoluteFill}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: 0 } } }],
                    { useNativeDriver: true }
                )}>
              <View style={styles.contentContainerStyle}>
                <BoldText style={styles.heading}>{item.name}</BoldText>
                <DescriptionCard text='This is a description of a challenge bla, bla, I like pants.' />
                <InstagramPhotosCard profile='mainstreetbeer' />
                <EnterCodeCard onCodeEntered={ () =>   this.props.navigator.push('completeChallenge', {itemId: item.id}) }/>
              </View>
            </Animated.ScrollView>
          </View>

          {this._renderNavigationBarShadow()}
          {this._renderNavigationBar()}

          <StatusBar barStyle={getBarStyle(item.color)} />
        </View>
    );
  }


  _renderNavigationBar() {
    let {
        color,
        accentColor,
    } = this.props.item;

    let {
        scrollY,
    } = this.state;

    return (
        <Animated.View style={[styles.navigationBar, {backgroundColor: color}]}>
          <View style={[styles.navigationBarAction, {marginLeft: -5}]}>
            <NavigationBar.BackButton
                tintColor={accentColor}
                onPress={() => this.props.navigator.pop() }
            />
          </View>

          <View style={styles.navigationBarTitle}>
            {this._renderNavigationBarTitle()}
          </View>

          <View style={styles.navigationBarAction}>
            <TouchableNativeFeedback onPress={this._handlePressDirections}>
              <MaterialIcons
                  name="directions"
                  size={25}
                  color={accentColor}
              />
            </TouchableNativeFeedback>
          </View>
        </Animated.View>
    );
  }

  // Unfortunately we can't animate shadowOpacity right now with native
  // animations, because the prop isn't whitelisted. So we can use
  // LinearGradient instead
  _renderNavigationBarShadow() {
    let {
        scrollY,
    } = this.state;

    let opacity = scrollY.interpolate({
      inputRange: [0, 50, 300, 301],
      outputRange: [0, 0, 1, 1],
    });

    return (
        <Animated.View style={[styles.navigationBarShadowContainer, {opacity}]}>
          <Components.LinearGradient
              colors={['rgba(0,0,0,0.08)', 'transparent']}
              style={styles.navigationBarShadow}
          />
        </Animated.View>
    );
  }

  _renderNavigationBarTitle() {
    let {
        accentColor,
        closingTimeToday,
        isOpen,
        isOpeningLater,
        name,
        openingTimeToday,
    } = this.props.item;

    let { scrollY } = this.state;

    let titleOpacity = scrollY.interpolate({
      inputRange: [-1, 0, 150, 300, 301],
      outputRange: [0, 0, 0.1, 1, 1],
    });

    let titleTranslateY = scrollY.interpolate({
      inputRange: [-1, 0, 300, 301],
      outputRange: [0, 0, 3, 3],
    });

    let subtitleScale = scrollY.interpolate({
      inputRange: [-1, 0, 300, 301],
      outputRange: [1, 1, 0.75, 0.75],
    });

    let subtitleTranslateY = scrollY.interpolate({
      inputRange: [-1, 0, 300, 301],
      outputRange: [-10, -10, -1, -1],
    });

    if (!openingTimeToday || !closingTimeToday) {
      text = `Hours not available`;
    } else if (isOpen) {
      text = `Open until ${formatTime(closingTimeToday)}`;
    } else if (isOpeningLater) {
      containerStyle = styles.barIsOpeningLaterContainer;
      text = `Opening at ${formatTime(openingTimeToday)}`;
    } else {
      containerStyle = styles.barIsClosedContainer;
      text = `Closed since ${formatTime(closingTimeToday)}`;
    }

    return (
        <View>
          <Animated.View style={{opacity: titleOpacity, transform: [{translateY: titleTranslateY}]}}>
            <BoldText style={[styles.navigationBarTitleText, {color: accentColor}]}>
              {name}
            </BoldText>
          </Animated.View>
        </View>
    );
  }

  _handlePressDirections = () => {
    let {
        address,
        postalCode,
        city,
    } = this.props.item;

    let daddr = encodeURIComponent(`${address} ${postalCode}, ${city}`);

    if (Platform.OS === 'ios') {
      Linking.openURL(`http://maps.apple.com/?daddr=${daddr}`);
    } else {
      Linking.openURL(`http://maps.google.com/?daddr=${daddr}`);
    }
  }
}

function getBarStyle(color) {
  if (color === '#fff' || color === '#f8fcf7') {
    return 'default';
  } else {
    return 'light-content';
  }
}

const HeroHeight = 370;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  contentContainerStyle: {
    padding: 20,
    backgroundColor: '#FAFAFA',
    minHeight: Layout.window.height - HeroHeight,
  },
  heroSpacer: {
    width: Layout.window.width,
    height: HeroHeight,
    backgroundColor: 'transparent',
  },
  heroImage: {
    width: 210,
    height: 190,
    marginTop: 80,
  },
  heroBackground: {
    height: HeroHeight + 250,
  },
  hero: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HeroHeight,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBottomGradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  navigationBarTitleText: {
    color: '#fff',
    textAlign: 'center',
  },
  navigationBarAction: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBarTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBarShadowContainer: {
    position: 'absolute',
    top: NavigationBar.DEFAULT_HEIGHT,
    left: 0,
    right: 0,
    height: 15,
    bottom: 0,
  },
  navigationBarShadow: {
    height: 15,
    width: Layout.window.width,
  },
  heading: {
    fontSize: 20,
  },
  navigationBar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: NavigationBar.DEFAULT_HEIGHT,
    alignItems: 'center',
    paddingTop: Exponent.Constants.statusBarHeight,
    paddingHorizontal: 5,
  },
});
