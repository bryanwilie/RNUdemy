import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    // initialize data source
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
    //ds = datasource object, this.props.libraries is from mapsStateToProps
    //to give something to be renderred to the scree,
  }

  renderRow(library) {
    // tell ListItem what list to render => LIBRARY
    return <ListItem library={library} />
  }
  // tell how to render a single element inside of our ListView
  // needs to return a single library

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
  // ListView doesn't know how to render each row, like title or so
}

const mapStateToProps = state => {
  // global state object, application state
  // firstly will give a initial state from reducers/index.js
  return { libraries: state.libraries }
  // LibraryList component will have props of Libraries containing state.libraries
};

export default connect(mapStateToProps)(LibraryList);
// forges connection within react side and redux side of our app
