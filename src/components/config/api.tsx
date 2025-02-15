export const API_KEY = "d0e3b964470447fbbc9ba9af498f4306"
const BASE_URL = "https://api.themoviedb.org/3"

const api = {
  
  fetchNetflixOriginals: `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTrendingSeries: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedSeries: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99`,

  
}

export default api