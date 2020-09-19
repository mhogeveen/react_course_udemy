import React from 'react'

const VideoDetail = ({ video }) => {
   if (!video) {
      return <div>Loading...</div>
   }

   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

   return (
      <div>
         <div className='ui embed'>
            <iframe title='video player' src={videoSrc} />
         </div>
         <div className='ui segments'>
            <div className='ui segment red'>
               <h3 className='ui header'>{video.snippet.title}</h3>
               <p className='ui description'>{video.snippet.channelTitle}</p>
            </div>
            <div className='ui segment'>
               <p className='ui description'>{video.snippet.description}</p>
            </div>
         </div>
      </div>
   )
}

export default VideoDetail
