import {Container, GenreBox, GenresRow, Search, UserName} from "./index.styles";
import {useEffect, useRef, useState} from "react";

const Filter = ({ genres, onClick, onSearch }) => {
  const [selectedGenre, setSelectedGenre] = useState({id: 28, name: 'Action'});
  const [searchTerm, setSearchTerm] = useState('');

  const timeoutRef = useRef(null);

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onSearch(newSearchTerm);
    }, 800);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);


  return (
    <Container>
      <div>
        <UserName>Wade Warren</UserName>
        <Search placeholder={'Search'}
          value={searchTerm}
          onChange={handleInputChange} />
        <GenresRow>
          {genres.map((genre, index) => (
            <GenreBox key={index}
              isActive={genre.id === selectedGenre?.id}
              onClick={() => {
                setSelectedGenre(genre);
                onClick(genre);
            }}>{genre.name}</GenreBox>
          ))}
        </GenresRow>
      </div>
    </Container>
  );
};

export default Filter;