import ActionTypes from './ActionTypes';
import { ChallengesState, Challenge } from './Records';

class ChallengesReducer {
  static reduce(state = new ChallengesState(), action) {
    if (ChallengesReducer[action.type]) {
      return ChallengesReducer[action.type](state, action);
    } else {
      return state;
    }
  }

  static [ActionTypes.SET_CHALLENGES](state, action) {
    console.log('type of challenges: ' + typeof action.challenges)
    let challenges = action.challenges.sortBy(challenge => challenge.name);
    return state.set('all', challenges);
  }

  static [ActionTypes.SET_NEARBY_CHALLENGES](state, action) {
    return state.set('nearby', action.challengeIds);
  }

  static [ActionTypes.SET_VISITED_CHALLENGES](state, action) {
    return state.set('visited', action.challengeIds);
  }

  static [ActionTypes.ADD_VISITED_CHALLENGE](state, action) {
    let visited = state.visited.push(action.challengeId);
    return state.set('visited', visited);
  }

  static [ActionTypes.REMOVE_VISITED_CHALLENGE](state, action) {
    let index = state.visited.indexOf(action.challengeId);

    if (index === -1) {
      return state;
    }

    return state.set('visited', state.visited.delete(index));
  }
}

export default ChallengesReducer.reduce;
