import { AsyncStorage } from 'react-native';

const Keys = {
  User: 'GrowlerUser',
  VisitedActivities: 'VisitedActivities',
  VisitedChallenges: 'VisitedChallenges',
};

async function getUserAsync() {
  let results = await AsyncStorage.getItem(Keys.User);

  try {
    return JSON.parse(results);
  } catch(e) {
    return null;
  }
}

function saveUserAsync(user) {
  return AsyncStorage.setItem(Keys.User, JSON.stringify(user));
}

function removeUserAsync() {
  return AsyncStorage.removeItem(Keys.User);
}

function saveVisitedActivitiesAsync(activityIds) {
  return AsyncStorage.setItem(Keys.VisitedActivities, JSON.stringify(activityIds));
}

async function getVisitedActivitiesAsync() {
  let results = await AsyncStorage.getItem(Keys.VisitedActivities);

  try {
    return JSON.parse(results);
  } catch(e) {
    return null;
  }
}

function saveVisitedChallengesAsync(challengeIds) {
  return AsyncStorage.setItem(Keys.VisitedChallenges, JSON.stringify(challengeIds));
}

async function getVisitedChallengesAsync() {
  let results = await AsyncStorage.getItem(Keys.VisitedChallenges);

  try {
    return JSON.parse(results);
  } catch(e) {
    return null;
  }
}

function clearAllAsync() {
  return AsyncStorage.clear();
}

export default {
  saveUserAsync,
  getUserAsync,
  removeUserAsync,
  saveVisitedActivitiesAsync,
  getVisitedActivitiesAsync,
  saveVisitedChallengesAsync,
  getVisitedChallengesAsync,
  clearAllAsync,
};
