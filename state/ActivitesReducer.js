import ActionTypes from './ActionTypes';
import { ActivitiesState, Activity } from './Records';

class ActivitiesReducer {
  static reduce(state = new ActivitiesState(), action) {
    if (ActivitiesReducer[action.type]) {
      return ActivitiesReducer[action.type](state, action);
    } else {
      return state;
    }
  }

  static [ActionTypes.SET_ACTIVITIES](state, action) {
    let activities = action.activities.sortBy(a => a.name);
    return state.set('all', activities);
  }

  static [ActionTypes.SET_NEARBY_ACTIVITIES](state, action) {
    return state.set('nearby', action.activityIds);
  }

  static [ActionTypes.SET_VISITED_ACTIVITIES](state, action) {
    return state.set('visited', action.activityIds);
  }

  static [ActionTypes.ADD_VISITED_ACTIVITY](state, action) {
    let visited = state.visited.push(action.activityId);
    return state.set('visited', visited);
  }

  static [ActionTypes.REMOVE_VISITED_ACTIVITY](state, action) {
    let index = state.visited.indexOf(action.activityId);

    if (index === -1) {
      return state;
    }

    return state.set('visited', state.visited.delete(index));
  }
}

export default ActivitiesReducer.reduce;
