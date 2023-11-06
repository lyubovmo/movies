import axios from "axios";

export const fetchAuthentication = async () => {
  const url = 'https://api.themoviedb.org/3/authentication';

  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWNjMDE5ZDRiYmU1NDY2ZmVhMmY1NzYyNmQ4NjgyYyIsInN1YiI6IjY1NDhhMWU5NmJlYWVhMDBlYWY4ZGFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MKn4DiEUDAsz8kWmqZ8bsSYVYVBWjPHYAZ8ozREC6zk',
  };

  try {
    await axios.get(url, { headers });
  } catch (error) {
    console.error(error);
  }
};