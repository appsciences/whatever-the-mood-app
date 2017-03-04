import ActionTypes from './ActionTypes';

export default class Actions {
  static setCurrentUser(user) {
    return {
      type: ActionTypes.SET_CURRENT_USER,
      user,
    }
  }

  static signIn(user) {
    return {
      type: ActionTypes.SIGN_IN,
      user,
    }
  }

  static signOut() {
    return {
      type: ActionTypes.SIGN_OUT,
    }
  }

  static setActivities(activities) {
    return {
      type: ActionTypes.SET_ACTIVITIES,
      activities,
    }
  }

  static setNearbyActivities(activityIds) {
    return {
      type: ActionTypes.SET_NEARBY_ACTIVITIES,
      activityIds,
    }
  }

  static setVisitedActivities(activityIds) {
    return {
      type: ActionTypes.SET_VISITED_ACTIVITIES,
      activityIds,
    }
  }

  static toggleVisitedActivity(activityId) {
    return {
      type: ActionTypes.TOGGLE_VISITED_ACTIVITY,
      activityId,
    }
  }

  static addVisitedActivity(activityId) {
    return {
      type: ActionTypes.ADD_VISITED_ACTIVITY,
      activityId,
    }
  }

  static removeVisitedActivity(activityId) {
    return {
      type: ActionTypes.REMOVE_VISITED_ACTIVITY,
      activityId,
    }
  }

  static setChallenges(challenges) {
    return {
      type: ActionTypes.SET_CHALLENGES,
      challenges,
    }
  }

  static setNearbyChallenges(challengeIds) {
    return {
      type: ActionTypes.SET_NEARBY_CHALLENGES,
      challengeIds,
    }
  }

  static setVisitedChallenges(challengeIds) {
    return {
      type: ActionTypes.SET_VISITED_CHALLENGES,
      challengeIds,
    }
  }

  static toggleVisitedChallenge(challengeId) {
    return {
      type: ActionTypes.TOGGLE_VISITED_CHALLENGE,
      challengeId,
    }
  }

  static addVisitedChallenge(challengeId) {
    return {
      type: ActionTypes.ADD_VISITED_CHALLENGE,
      challengeId,
    }
  }

  static removeVisitedChallenge(challengeId) {
    return {
      type: ActionTypes.REMOVE_VISITED_CHALLENGE,
      challengeId,
    }
  }

  static setCommunity(community) {
    return {
      type: ActionTypes.SET_COMMUNITY,
      community,
    }
  }


  static computeDistances() {
    return {
      type: ActionTypes.COMPUTE_DISTANCES,
    }
  }
}
