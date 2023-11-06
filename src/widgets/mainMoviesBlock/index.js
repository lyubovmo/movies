import {useEffect, useState} from "react";
import {fetchMovieData} from "../../api/discovers";
import {Container, Row, Title} from "./index.styles";
import Discover from "../../components/discover";
import {fetchPopular} from "../../api/popular";
import MovieItem from "../../components/movieItem";

const MainMoviesBlock = ({ genres, moviesByGenre, selectedGenre, isLoading, searchResults }) => {
  const [discovers, setDiscovers] = useState([]);
  const [discoversWithGenres, setDiscoversWithGenres] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getDiscoversMovies = async () => {
      const discoversList = await fetchMovieData();
      setDiscovers(discoversList.results.slice(0, 10));
    }
    getDiscoversMovies();
  }, []);

  useEffect(() => {
    const updatedDiscovers = discovers.map((movie) => {
      if (movie.genre_ids) {
        const genreNames = movie.genre_ids.map((genreId) => {
          const genre = genres?.find((g) => g.id === genreId);
          return genre ? genre.name : '';
        });

        return {
          ...movie,
          genres: genreNames,
        };
      }
      return movie;
    });

    setDiscoversWithGenres(updatedDiscovers);
  }, [discovers, genres]);

  useEffect(() => {
    const getPopular = async() => {
      const data = await fetchPopular();
      setPopular(data.results.slice(0, 10));
    };
    getPopular();
  }, []);

  return (
    <Container>
      <Title>Discovers</Title>
      <Row>
        {discoversWithGenres.map((discover, index) => (
          <Discover isFirst={index === 0} movie={discover} key={index} />
        ))}
      </Row>
      <Title>Popular</Title>
      <Row>
        {popular.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </Row>
      {
        !isLoading
          ? <>
            <Title>{selectedGenre?.name}</Title>
            <Row>
              {moviesByGenre.map((movie, index) => (
                <MovieItem key={index} movie={movie} />
              ))}
            </Row>
          </>
          : null
      }
      {searchResults.length
        ? <>
          <Title>Search results</Title>
          <Row>
            {searchResults.map((movie, index) => (
              <MovieItem key={index} movie={movie} />
            ))}
          </Row>
        </>
        : null
      }
    </Container>
  );
};

export default MainMoviesBlock;