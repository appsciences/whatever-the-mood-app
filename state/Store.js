import { applyMiddleware, combineReducers, createStore } from 'redux';
import { effectsMiddleware } from 'redux-effex';

import CurrentUserReducer from './CurrentUserReducer';
import ActivitiesReducer from './ActivitesReducer';
import ChallengesReducer from './ChallengesReducer';
import CommunityReducer from './CommunityReducer';
import Effects from '../effects';

export default createStore(
  combineReducers({
    currentUser: CurrentUserReducer,
    activities: ActivitiesReducer,
    challenges: ChallengesReducer,
    community: CommunityReducer,
  }),
  applyMiddleware(effectsMiddleware(Effects)),
);
