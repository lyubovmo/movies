import axios from 'axios';

export const fetchMovieByGenre = async (id) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWNjMDE5ZDRiYmU1NDY2ZmVhMmY1NzYyNmQ4NjgyYyIsInN1YiI6IjY1NDhhMWU5NmJlYWVhMDBlYWY4ZGFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MKn4DiEUDAsz8kWmqZ8bsSYVYVBWjPHYAZ8ozREC6zk',
    }
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
