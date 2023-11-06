import {Container} from "./index.styles";
import Navbar from "../navbar";
import {useEffect, useState} from "react";
import {fetchAuthentication} from "../../api/authentication";
import MainMoviesBlock from "../mainMoviesBlock";
import Filter from "../filter";
import {fetchGenres} from "../../api/genres";
import {fetchMovieByGenre} from "../../api/filterByGenre";
import {searchByQuery} from "../../api/search";

const MovieWidget = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({id: 28, name: 'Action'});
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const registered = async () => await fetchAuthentication();
    registered();
  }, []);

  useEffect(() => {
    const getGenres = async () => {
      const genresList = await fetchGenres();
      setGenres(genresList.genres);
    }
    getGenres();
  }, []);

  useEffect(() => {
    filterByGenre(selectedGenre.id);
  }, []);

  const filterByGenre = async (id) => {
    setIsLoading(true);
    const movieList = await fetchMovieByGenre(id);
    setMoviesByGenre(movieList.results.slice(0, 10));
    setIsLoading(false);
  };

  const search = async (query) => {
    const searchResults = await searchByQuery(query);
    setSearchResults(searchResults.results.slice(0, 10));
  };

  return (
    <Container>
      <Navbar />
      <MainMoviesBlock
        genres={genres}
        selectedGenre={selectedGenre}
        moviesByGenre={moviesByGenre}
        isLoading={isLoading}
        searchResults={searchResults}
      />
      <Filter genres={genres}
        onClick={(genre) => {
          setSelectedGenre(genre);
          filterByGenre(genre?.id);
        }}
        onSearch={(query) => search(query)}
      />
    </Container>
  );
};

export default MovieWidget;

