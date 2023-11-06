import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const Box = styled.div`
  border-radius: 16px;
  flex-shrink: 0;
  width: ${(props) => props.isFirst ? '350px' : '250px'};
  height: 200px;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  object-fit: cover;
`;

export const ShadowBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  box-shadow: inset 0 -40px 50px -10px #000000;
  position: absolute;
  top: 0;
  left: 0;
`;

export const DescriptionRow = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const MovieTitle = styled.h3`
  padding: 0;
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Genres = styled.span`
  color: rgba(255, 255, 255, .7);
  font-size: 14px;
  &:after {
    content: ', ';
  }
  &:last-child {
    &:after{
      content: none;
    }
  }
`;

export const Rating = styled.div`
  padding-left: 4px;
  color: #e9ae1d;
  font-size: 12px;
  font-weight: 600;
`;