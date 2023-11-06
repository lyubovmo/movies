import {Box, DescriptionRow, Genres, MovieTitle, Rating, ShadowBox, StyledImage, Wrapper} from "./index.styles";
import {useMemo} from "react";

const Discover = ({ movie, isFirst }) => {
  const imgSource = useMemo(() => {
    return `https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`
  }, []);
  return (
    <Wrapper>
      <Box isFirst={isFirst}>
        <StyledImage src={imgSource} alt=""/>
        <ShadowBox />
      </Box>
      <DescriptionRow>
        <div>
          <MovieTitle>{movie.title}</MovieTitle>
          {movie.genres.map((genre, index) => <Genres key={index}>{genre}</Genres>)}
        </div>
        <Rating>{movie.vote_average}</Rating>
      </DescriptionRow>
    </Wrapper>
  );
};

export default Discover;
