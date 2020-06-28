import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube'

const KEY = 'AIzaSyBXCcT14Rb0Xlo4ondpuOwQSmusJQ-AttY'

class App extends React.Component {
   state = { videos: [], selectedVideo: null }

   onTermSubmit = async (term) => {
      const res = await youtube.get('/search', {
         params: {
            q: term,
            part: 'snippet',
            type: 'video',
            maxResults: 5,
            key: KEY,
         },
      })

      this.setState({ videos: res.data.items })
   }

   onVideoSelect = (video) => {
      this.setState({ selectedVideo: video })
   }

   render() {
      return (
         <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
         </div>
      )
   }
}

export default App
