import axios from "axios"
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

// if (!UNSPLASH_KEY) {
//   throw new Error('Missing VITE_UNSPLASH_KEY. Place it in redux3/.env and restart the dev server.')
// }

export default async function fetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  })

  return res.data
}

export  async function fetchVideos(query,  per_page = 20) {
  const res = await axios.get('https://api.pexels.com/v1/videos/search', {
    params: { query,per_page },
    headers: { Authorization: PEXELS_KEY },
  })

  return res.data
}