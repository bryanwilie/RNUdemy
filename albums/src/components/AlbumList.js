import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] }; // albums is an empty array at first

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
  // console.log('componentWillMount in AlbumList');

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
  // <AlbumDetail key={album.title}>{album.title}</AlbumDetail>
  // prop.album then will become the real album for AlbumDetail

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
  // gotta return some JSX
  /* <Text>Album List!!!!</Text> */
}

export default AlbumList;
