import {memoize} from 'cerebro-tools'

const BASE_URL = 'https://filmaffinity-unofficial.herokuapp.com'

export const fetchFilms = memoize((q, language) => (
	fetch(`${BASE_URL}/api/search?q=${q}&lang=${language}`)
	.then(response => response.json())
))

export const detailFilm = memoize((id, language) => (
  fetch(`${BASE_URL}/api/movie/${id}?lang=${language}`)
  .then(response => response.json())
))



