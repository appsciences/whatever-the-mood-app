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
                <Image source={require('../assets/images/background.png')} style={styles.container}>


                    {/*<View style={styles.panel}>*/}
                        {/*<Text style={styles.heading}>hi</Text>*/}
                        {/*<Text style={styles.body}>hi there! we’re here to give you access to real, amazing people that match your spirit. What happens next is up to you. You in?</Text>*/}

                    {/*</View>*/}

                    <Image source={require('../assets/images/Asset 4.png')} style={styles.panel}/>

                    <TouchableNativeFeedback onPress={
                        () => this.props.navigator.push(Router.getRoute(
                            'mood',
                            {type: this.state.mood == "Love More challenge" ? 'challenge' : 'activity' }
                        ))
                    }>
                            <Image
                                source={require('../assets/images/circle-arrow.png')}
                                style={styles.button}
                            />
                    </TouchableNativeFeedback>

                </Image>


        );
    }

}


var styles = StyleSheet.create({
    heading: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 50,
        color: 'black'

    },

    body: {
        marginTop: 40,
        fontFamily: 'Quicksand-Regular',
        fontSize: 26,
        color: 'black'

    },
    panel: {
        marginTop: 100,
        alignItems: 'center',
        marginBottom: 200,
        marginLeft:40,
        marginRight:40
    },
    button: {
        height: 80,
        width: 80,
        top: -40

    },
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
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

module.exports = Intro;