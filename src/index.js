import React, { Component } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyARO7zct2lmuqgK1Sy0_kFjEVRsNZ4HQlQ';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      videos : [],
      selectedVideo: null
    }
    this.VideoSearch('surfboards');
  }

  VideoSearch(term){
    YTSearch({key : API_KEY, term : term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }) 
    });
  }

  render(){
    const VideoSearch = _.debounce((term) => this.VideoSearch(term), 300);
    return (
      <div>
        <SearchBar onSearchVideoChange={ VideoSearch } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList onSelectedVideo={(video)=> {this.setState({selectedVideo: video})}} videos={ this.state.videos }/>
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));

