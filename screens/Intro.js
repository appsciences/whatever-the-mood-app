/**
 * Created by idiot on 12/15/16.
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
import {Image} from 'react-native';
const StyleSheet = require('StyleSheet');
import {connect} from 'react-redux';
import { RegularText } from '../components/StyledText';
import Router from '../navigation/Router';


import TouchableNativeFeedback from '@exponent/react-native-touchable-native-feedback-safe';

const {
    View,
    Picker,
    Text,
} = ReactNative;

const Item = Picker.Item;

@connect()
class Intro extends React.Component {
    static route = {
        navigationBar: {
            visible: false,
        }
    }

    state = {
        mood: "Bored",
    };

    render() {
        return (
                <Image source={require('../assets/images/intro-screen.png')} style={styles.container}>

                </Image>


        );
    }

}


var styles = StyleSheet.create({

    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },

});

module.exports = Intro;