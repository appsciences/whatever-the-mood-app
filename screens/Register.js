/**
 * Created by idiot on 12/15/16.
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const StyleSheet = require('StyleSheet');
import { connect } from 'react-redux';


const {
    View,
    Picker,
    Text,
    Button
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
        name:'',
        userName:'',
        password:''
    };

    render() {
        return (
            <View style={{ padding: 50, alignItems: 'center'}}>
                <Text style={styles.heading}>Registration</Text>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                    placeholder={'Name'}
                /><TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(userName) => this.setState({userName})}
                value={this.state.userName}
                placeholder={'Username'}
            /><TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder={'Password'}
            />
                <Button
                    onPress={onClick}
                    title="New Adventure"
                    color="#841584"
                    accessibilityLabel="Complete Challenge"
                />
            </View>

        );
    }


    onClick = () => {

        this.props.navigation.performAction(({ tabs, stacks }) => {
            tabs('main').jumpToTab('list');
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
        fontSize: 25

    },
    button: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 18

    }
});

module.exports = PickerExample;