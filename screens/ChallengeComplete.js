/**
 * Created by idiot on 12/15/16.
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const StyleSheet = require('StyleSheet');
const Router = require('../navigation/Router')
import { connect } from 'react-redux';

import { RegularText } from '../components/StyledText';

import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';

import { withNavigation } from '@expo/ex-navigation';

const {
    View,
    Picker,
    Text,
    Button
} = ReactNative;

const Item = Picker.Item;

@withNavigation
@connect()
class ChallengeComplete extends React.Component {
    static route = {
        navigationBar: {
            visible: false,
        }
    }

    state = {
        selected1: 'key0',
    };

    render() {
        return (
            <View style={{ padding: 20, alignItems: 'center'}}>
                <Text style={styles.heading}>You have earned 50 pts! </Text>

                <TouchableNativeFeedback onPress={this.onClick}>
                    <View style={styles.facebookButton}>
                        <RegularText style={styles.facebookButtonText}>
                            Share
                        </RegularText>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={this.onClick}>
                    <View style={styles.guestButton}>
                        <RegularText style={styles.guestButtonText}>
                            On to Next Adventure
                        </RegularText>
                    </View>
                </TouchableNativeFeedback>



            </View>

        );
    }

    onClick = () => {
        this.props.navigator.popToTop();
        this.props.navigation.performAction(({ tabs, stacks }) => {
            tabs('main').jumpToTab('mood');
        });
    }

}


var styles = StyleSheet.create({
    picker: {
        width: 275,
    },
    pickerItem:{
        fontSize: 25

    },
    heading: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 25,
        marginBottom: 30,
        marginTop: 50,

    },
    button: {
        backgroundColor: 'grey',
        borderColor: 'black',
        fontFamily: 'Quicksand-Bold',
        fontSize: 18

    },
    facebookButton: {
        backgroundColor: '#3b5998',
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        borderRadius: 5,
        width: 250,
    },
    guestButton: {
        marginTop: 15,
        backgroundColor: '#eee',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        width: 250,
    },
    facebookButtonText: {
        fontSize: 15,
        color: '#fff',
    },
    guestButtonText: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.9)',
    }
});

module.exports = ChallengeComplete;