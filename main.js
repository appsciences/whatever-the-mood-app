import Exponent, { Font } from 'exponent';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@exponent/vector-icons';
import { NavigationProvider, StackNavigation, withNavigation } from '@exponent/ex-navigation';
import { Provider as ReduxProvider, connect } from 'react-redux';
import { List } from 'immutable';

import Actions from './state/Actions';
import ImageGalleryPortal from './components/ImageGalleryPortal';
import LocalStorage from './state/LocalStorage';
import Router from './navigation/Router';
import Store from './state/Store';
import { Activity, Challenge, CommunityMember, User } from './state/Records';
import allActivities from './data/activities';
import allChallenges from './data/challenges';
import allCommunity from './data/community';

class AppContainer extends React.Component {
  render() {
    return (
      <ReduxProvider store={Store}>
        <NavigationProvider router={Router}>
          <App {...this.props} />
        </NavigationProvider>
      </ReduxProvider>
    );
  }
}

@withNavigation
@connect(data => App.getDataProps)
class App extends React.Component {
  static getDataProps(data) {
    return {
      currentUser: data.currentUser,
    }
  }

  state = {
    assetsReady: false,
    dataReady: false,
  };

  async componentDidMount() {
    await this._loadAssetsAsync();
    await this._loadCacheAsync();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.assetsReady || !this.state.dataReady) {
      return;
    }

    const rootNavigator = this.props.navigation.getNavigator('root');
    const previouslySignedIn = isSignedIn(prevProps.currentUser) &&
      prevState.dataReady === this.state.dataReady;
    const currentlySignedIn = isSignedIn(this.props.currentUser);

    if (!previouslySignedIn && currentlySignedIn) {
      rootNavigator.replace('tabNavigation');
    } else if (previouslySignedIn && !currentlySignedIn) {
      rootNavigator.replace('authentication');
    }
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      ...MaterialIcons.font,
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
      'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Semibold.ttf'),
      'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
      'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
      'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
      'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    });

    this.setState({
      assetsReady: true,
    });
  }

  _loadCacheAsync = async () => {

    let user = new User(await LocalStorage.getUserAsync());

    let activities = new List(allActivities.map(data => new Activity(data)));
    let challenges = new List(allChallenges.map(data => new Challenge(data)));
    let community = new List(allCommunity.map(data => new CommunityMember(data)));

    let visitedActivities = new List(await LocalStorage.getVisitedActivitiesAsync());
    let visitedChallenges = new List(await LocalStorage.getVisitedChallengesAsync());

    this.props.dispatch(Actions.setCurrentUser(user));
    this.props.dispatch(Actions.setActivities(activities));
    this.props.dispatch(Actions.setChallenges(challenges));
    this.props.dispatch(Actions.setCommunity(community));

    this.props.dispatch(Actions.setVisitedActivities(visitedActivities));
    this.props.dispatch(Actions.setVisitedChallenges(visitedChallenges));

    this.setState({
      dataReady: true,
    });
  }

  render() {
    if (!this.state.assetsReady || !this.state.dataReady) {
      return <Exponent.Components.AppLoading />;
    }

    return (
      <View style={styles.container}>
        <StackNavigation
          id="root"
          defaultRouteConfig={{navigationBar: { backgroundColor: '#fff'}}}
          initialRoute={Router.getRoute('authentication')}
        />

        <ImageGalleryPortal />
      </View>
    );
  }
}

function isSignedIn(userState) {
  return !!userState.authToken || userState.isGuest;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Exponent.registerRootComponent(AppContainer);
