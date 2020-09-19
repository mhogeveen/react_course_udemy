import { useState, useEffect } from 'react'
import youtube from '../api/youtube'

const useVideos = (defaultSearchTerm) => {
   const [videos, setVideos] = useState([])

   useEffect(() => {
      search(defaultSearchTerm)
   }, [defaultSearchTerm])

   const search = async (term) => {
      const res = await youtube.get('/search', {
         params: {
            q: term,
            part: 'snippet',
            type: 'video',
            maxResults: 10,
            key: 'AIzaSyBXCcT14Rb0Xlo4ondpuOwQSmusJQ-AttY', // Fill in API key here
         },
      })

      setVideos(res.data.items)
   }

   return [videos, search]
}

export default useVideos
