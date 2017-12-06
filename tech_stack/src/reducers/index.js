import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
//one reducers named library, default is empty array
// the application state will have key of libraries
// console.log(store.getState()); will return { libraries: [] }

// console.log(store.getState);
// { libraries: [ { id: 1, title: 'webpack', description:'...' }]}
