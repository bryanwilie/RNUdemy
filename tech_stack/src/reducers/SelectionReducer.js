export default (state = null, action) => {
// if state os undefined, default it to value of null
// ES6 script

  // reducers is always called with the state object which is the state that was returned the last time this reducers was executed
  // console.log(action);

  // make sure reducers sees the type of actions and will return the actions payload, instead of null

  //initial value/state when redux app first boots up
  // init can't be undefined
  // return null;
  // don't have a preselected row

  // BOILERPLATE
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
      // whatever state last time redux ran
  }
};
