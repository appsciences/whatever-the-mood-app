export default defineActionConstants([
  'SET_CURRENT_USER',
  'SIGN_IN',
  'SIGN_OUT',
  'SET_ACTIVITIES',
  'SET_CHALLENGES',
  'SET_COMMUNITY',
  'COMPUTE_DISTANCES',
  'SET_NEARBY_ACTIVITIES',
  'SET_NEARBY_CHALLENGES',
  'SET_VISITED_ACTIVITIES',
  'SET_VISITED_CHALLENGES',
  'ADD_VISITED_BREWERY',
  'ADD_VISITED_CHALLENGE',
  'REMOVE_VISITED_ACTIVITY',
  'REMOVE_VISITED_CHALLENGE',
  'TOGGLE_VISITED_ACTIVITY',
  'TOGGLE_VISITED_CHALLENGE',
]);

function defineActionConstants(names) {
  return names.reduce((result, name) => {
    result[name] = name;
    return result;
  }, {});
}
