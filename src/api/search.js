import axios from 'axios';

export const searchByQuery = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: { query, page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWNjMDE5ZDRiYmU1NDY2ZmVhMmY1NzYyNmQ4NjgyYyIsInN1YiI6IjY1NDhhMWU5NmJlYWVhMDBlYWY4ZGFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MKn4DiEUDAsz8kWmqZ8bsSYVYVBWjPHYAZ8ozREC6zk',
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
