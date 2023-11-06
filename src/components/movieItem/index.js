import {Box, StyledImg} from "./index.styles";


const MovieItem = ({ movie }) => {
  return (
    <Box>
      <StyledImg src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={''}/>
    </Box>
  );
};

export default MovieItem;