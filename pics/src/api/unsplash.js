import axios from 'axios'

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID ', // Fill in API key after Client-ID (do not forget the space between the key and Client-ID)
   },
})
