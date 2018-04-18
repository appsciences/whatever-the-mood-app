import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Router from './Router';

const defaultRouteConfig = {
  navigationBar: {
    titleStyle: {fontFamily: 'OpenSans-Bold'},
    backgroundColor: '#fff',
  },
};

export default class    TabNavigationLayout extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <TabNavigation
        tabBarColor={Colors.tabBar}
        navigatorUID="main"
        tabBarHeight={48}
        initialTab="mood">


        <TabNavigationItem
          id="mood"
          renderIcon={isSelected => this._renderIcon('heart', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('mood')}
          />
        </TabNavigationItem>


        <TabNavigationItem
          id="profile"
          renderIcon={isSelected => this._renderIcon('user', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('profile')}
          />
        </TabNavigationItem>

          <TabNavigationItem
              id="community"
              renderIcon={isSelected => this._renderIcon('users', isSelected)}>
              <StackNavigation
                  defaultRouteConfig={defaultRouteConfig}
                  initialRoute={Router.getRoute('community', {type: 'community'})}
              />
          </TabNavigationItem>

      </TabNavigation>
    );
  }

  _renderIcon(iconName, isSelected) {
    let color = isSelected ? Colors.tabIconSelected : Colors.tabIconDefault;

    return (
      <View style={styles.tabItemContainer}>
        <FontAwesome name={iconName} size={32} color={color} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
