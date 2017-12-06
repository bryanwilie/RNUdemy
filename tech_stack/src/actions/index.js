// selectLibrary is an action creator
export const selectLibrary = (libraryId) => {
// not export default, export means, export all, a star is not needed to indicate all
  return {
    // return the action
    type: 'select_library',
    payload: libraryId
  };
};
