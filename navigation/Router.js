import {
  createRouter,
} from '@exponent/ex-navigation';

import AuthenticationScreen from '../screens/AuthenticationScreen';
import ActivityDetailsScreen from '../screens/ActivityDetailsScreen';
import ChallengeDetailsScreen from '../screens/ChallengeDetailsScreen';
import MapScreen from '../screens/MapScreen';
import MoodSelect from '../screens/MoodSelect';
import TabNavigationLayout from './TabNavigationLayout';
import ChallengeComplete from '../screens/ChallengeComplete';
import Profile from '../screens/Profile';
import ValuesScreen from '../screens/Values';
import ListScreen from '../screens/ListScreen';
import IntroScreen from '../screens/Intro';

export default createRouter(() => ({
  authentication: () => AuthenticationScreen,
  activityDetails: () => ActivityDetailsScreen,
  intro: () => IntroScreen,
  challengeDetails: () => ChallengeDetailsScreen,
  values: () => ValuesScreen,
  mood: () => MoodSelect,
  list: () => ListScreen,
  challengeList: () => ListScreen,
  community: () => ListScreen,
  map: () => MapScreen,
  profile: () => Profile,
  tabNavigation: () => TabNavigationLayout,
  completeChallenge: () => ChallengeComplete,
}), {
  ignoreSerializableWarnings: true,
});
