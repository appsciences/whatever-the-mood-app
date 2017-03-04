import ActionTypes from './ActionTypes';
import { CommunityState } from './Records';

class CommunityReducer {
  static reduce(state = new CommunityState(), action) {
    if (CommunityReducer[action.type]) {
      return CommunityReducer[action.type](state, action);
    } else {
      return state;
    }
  }

  static [ActionTypes.SET_COMMUNITY](state, action) {
    let community = action.community.sortBy(c => c.description).reverse();
    return state.set('all', community);
  }

}

export default CommunityReducer.reduce;
