import {memoize} from 'cerebro-tools'

const BASE_URL = 'https://filmaffinity-api.mybluemix.net'
const BASE_URL_DETAIL = 'https://filmaffinity-unofficial.herokuapp.com'

export const fetchFilms = memoize((q) => (
  fetch(`${BASE_URL}/api/film/byTitle?title=${q}`)
    .then(response => response.json())
    .then(json => json.result)
))
export const scoreFilm = memoize((url) =>(
  fetch(`${BASE_URL}/api/film/byId?id=/en/${url}`)
  .then(response => response.json())
  .then(json => json.result)
))

export const detailFilm = memoize((id) =>(
  fetch(`${BASE_URL_DETAIL}/api/movie/${id}?lang=ES`)
  .then(response => response.json())
))


