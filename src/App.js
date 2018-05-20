import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoContainer from './components/VideoContainer';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const YOUTUBE_KEY = 'AIzaSyBvIvuSnNmi1ChA8YYAsnz2vkylM-IBMIU';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: ''
    };
  }

  componentDidMount() {
    this.searchTerm('vines');
  }

  searchTerm(term) {
    YTSearch({key: YOUTUBE_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    const videoDash = _.debounce((term) => this.searchTerm(term), 300);
    return(
      <div>
        <Searchbar 
          onSearchChange = {videoDash}
        />
        <VideoContainer
          video= {this.state.selectedVideo}
        />
        <VideoList 
          videos={this.state.videos}
          onSelectedVideo={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}

export default App;
