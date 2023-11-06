import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  width: 400px;
  padding: 30px 16px;
  background-color: #212433;
  box-sizing: border-box;
`;

export const UserName = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, .7);
`;

export const GenreBox = styled.div`
  padding: 8px 16px;
  background-color: ${(props) => props.isActive ? '#68c9c7' : '#2c2f3e'};
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
`;

export const GenresRow = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Search = styled.input`
  margin: 30px 0 10px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background-color: #2c2f3e;
  border-radius: 8px;
  box-sizing: border-box;
  color: #ffffff;
`;