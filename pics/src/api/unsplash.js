import axios from 'axios'

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID 1YwIINMVeP-9U3gP_cM6ORHSlGE2Dl8oBKeAs2IW-pY',
   },
})
