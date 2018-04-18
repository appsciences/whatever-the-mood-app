/**
 * Created by idiot on 12/15/16.
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const StyleSheet = require('StyleSheet');
import {
    SummaryCard,
} from '../components/DetailCards';

import { RegularText } from '../components/StyledText';

import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';

const {
    View,
    Text,
    Button
} = ReactNative;


class Values extends React.Component {
   static route = {
        navigationBar: {
            visible: false,
        }
    }

    render() {
        return (
            <View style={{ padding: 50, alignItems: 'center'}}>
                <Text style={styles.heading}>Our Values</Text>
                <SummaryCard text='I am the LORD thy God.' />
                <SummaryCard text='No other gods before me.' />
                <SummaryCard text='My name is Ed.' />
                <SummaryCard text='...' />


                <TouchableNativeFeedback onPress={this.onClick}>
                    <View style={styles.guestButton}>
                        <RegularText style={styles.guestButtonText}>
                            I dig
                        </RegularText>
                    </View>
                </TouchableNativeFeedback>
            </View>

        );
    }



}


var styles = StyleSheet.create({

    heading: {
            fontFamily: 'Quicksand-Bold',
        fontSize: 25

    },
    button: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 18

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
    guestButtonText: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.9)',
    }
});

module.exports = Values;