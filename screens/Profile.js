import React from 'react';
import {
  TouchableHighlight,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import Actions from '../state/Actions';
import { RegularText, BoldText } from '../components/StyledText';

import {
    MapCard,
    DescriptionCard,
    EnterCodeCard,
    SummaryCard,
    InstagramPhotosCard,
    VisitedCard,
} from '../components/DetailCards';


@connect(data => ProfileScreen.getDataProps(data))
export default class ProfileScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Profile',
    },
  }

  static getDataProps(data) {
    return {
      currentUser: data.currentUser,
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderAccountSection()}
      </ScrollView>
    );
  }

  _renderAccountSection() {
    let { currentUser } = this.props;
    let signOutText;

    if (currentUser.isGuest) {
      signOutText = 'Sign out (you are currently a guest)';
    } else {
      signOutText = `Sign out`;
    }

    return (
      <View>
        <View style={styles.cardLabel}>
          <BoldText style={styles.cardLabelText}>
            Points
          </BoldText>
        </View>

        <SummaryCard text="You currently have 150 points!" />

        <View style={styles.cardLabel}>
          <BoldText style={styles.cardLabelText}>
            Next WTM Event
          </BoldText>
        </View>


        <SummaryCard text="WTM silent disco party for community luminaries like yourself! Wednesday Feb 15th, 9pm @ The Bonnie. Only 50 more points to unlock the secret entry code!" />

        <View style={styles.cardLabel}>
          <BoldText style={styles.cardLabelText}>
            Past Adventures
          </BoldText>
        </View>


        <SummaryCard text="Visited Cody @ The Bonnie and completed the secret challenge (150 points)." />

        <View style={styles.card}>
          <TouchableNativeFeedback
            onPress={this._handlePressSignOut}
            fallback={TouchableHighlight}
            underlayColor="#eee">
            <View style={[styles.cardBody, {flexDirection: 'row'}]}>
              <MaterialIcons
                name="exit-to-app"
                size={25}
                style={{transform: [{rotate: '180deg'}]}}
              />

              <RegularText style={styles.signOutText}>
                {signOutText}
              </RegularText>
            </View>
          </TouchableNativeFeedback>
        </View>

        <StatusBar barStyle="default" />
      </View>
    );
  }

  _handlePressSignOut = () => {
    this.props.dispatch(Actions.signOut());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  card: {
    marginTop: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E8E8E8',
    backgroundColor: '#fff',
  },
  cardBody: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  cardLabel: {
    marginTop: 20,
    paddingLeft: 8,
    paddingBottom: 5,
  },
  cardLabelText: {
    fontSize: 15,
    color: '#313131',
  },
  cardLabelTex2: {
    fontSize: 12,
    color: '#313131',
  },
  signOutText: {
    fontSize: 15,
    marginLeft: 8,
    marginTop: 1,
  },
});
