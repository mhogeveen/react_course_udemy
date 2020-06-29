import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube'

const KEY = '' // Fill in API key here

class App extends React.Component {
   state = { videos: [], selectedVideo: null }

   componentDidMount() {
      this.onTermSubmit('hello')
   }

   onTermSubmit = async (term) => {
      const res = await youtube.get('/search', {
         params: {
            q: term,
            part: 'snippet',
            type: 'video',
            maxResults: 10,
            key: KEY,
         },
      })

      this.setState({
         videos: res.data.items,
         selectedVideo: res.data.items[0],
      })
   }

   onVideoSelect = (video) => {
      this.setState({ selectedVideo: video })
   }

   render() {
      return (
         <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className='ui grid'>
               <div className='ui row'>
                  <div className='eleven wide column'>
                     <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className='five wide column'>
                     <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default App
