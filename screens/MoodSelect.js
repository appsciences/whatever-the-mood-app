/**
 * Created by idiot on 12/15/16.
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const StyleSheet = require('StyleSheet');
import {connect} from 'react-redux';
import { RegularText } from '../components/StyledText';
import Router from '../navigation/Router';


import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';

const {
    View,
    Picker,
    Text,
} = ReactNative;

const Item = Picker.Item;

@connect()
class PickerExample extends React.Component {
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
            <View style={{ padding: 50, alignItems: 'center'}}>
                <Text style={styles.heading}>What's the Mood?</Text>
                    <Picker
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={mood => this.setState({mood})}
                        selectedValue={this.state.mood}>

                        <Item label="Bored" value="Bored"/>
                        <Item label="Broke and Bored" value="Broke and Bored"/>
                        <Item label="Dance party" value="Dance party"/>
                        <Item label="Bagel" value="Bagel"/>
                        <Item label="Alone in Public" value="Alone in Public"/>
                        <Item label="Silly" value="Silly"/>
                        <Item label="Deep conversation" value="Deep conversation"/>
                        <Item label="Old timer dive bar" value="Old timer dive bar"/>
                        <Item label="Dive bar" value="Dive bar"/>
                        <Item label="Surprise me" value="Surprise me"/>
                        <Item label="I want to laugh" value="I want to laugh"/>
                        <Item label="I hate my life" value="I hate my life"/>
                        <Item label="Hang with artists" value="Hang with artists"/>
                        <Item label="I need to heal" value="I need to heal"/>
                        <Item label="Find likeminded people" value="Find likeminded people"/>
                        <Item label="Casual dinner" value="Casual dinner"/>
                        <Item label="Board games and beer" value="Board games and beer"/>
                        <Item label="Outdoor activity" value="Outdoor activity"/>
                        <Item label="I hate this app" value="I hate this app"/>
                        <Item label="Tell me what to eat" value="Tell me what to eat"/>
                        <Item label="Maybe something spiritual " value="Maybe something spiritual "/>
                        <Item label="I just want to yell" value="I just want to yell"/>
                        <Item label="I just want to cuddle" value="I just want to cuddle"/>
                        <Item label="I need to celebrate NOW" value="I need to celebrate NOW"/>
                        <Item label="I give up" value="I give up"/>
                        <Item label="I want a hug" value="I want a hug"/>
                        <Item label="I want to do something productive" value="I want to do something productive"/>
                        <Item label="I want to help someone" value="I want to help someone"/>
                        <Item label="Let’s people watch" value="Let’s people watch"/>
                        <Item label="Dessert" value="Dessert"/>
                        <Item label="Live music" value="Live music"/>
                        <Item label="Puppies?" value="Puppies?"/>
                        <Item label="Painting" value="Painting"/>
                        <Item label="Arts and crafts?" value="Arts and crafts?"/>
                        <Item label="Group activity" value="Group activity"/>
                        <Item label="Family friendly" value="Family friendly"/>
                        <Item label="Make a new friend in person" value="Make a new friend in person"/>
                        <Item label="Performing Arts" value="Performing Arts"/>
                        <Item label="Love More challenge" value="Love More challenge"/>

                    </Picker>

                <TouchableNativeFeedback onPress={
                    () => this.props.navigator.push(Router.getRoute(
                        'list',
                        {type: this.state.mood == "Love More challenge" ? 'challenge' : 'activity' }
                        ))
                }>
                    <View style={styles.guestButton}>
                        <RegularText style={styles.guestButtonText}>
                           Let's do this!
                        </RegularText>
                    </View>
                </TouchableNativeFeedback>



            </View>

        );
    }

}


var styles = StyleSheet.create({
    picker: {
        width: 325,
    },
    pickerItem: {
        fontSize: 23

    },
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
        fontFamily: 'Quicksand-Bold',
        fontSize: 18,
        color: 'rgba(0,0,0,0.9)',
    }
});

module.exports = PickerExample;