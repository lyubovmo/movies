import styled from "styled-components";

export const Container = styled.section`
  padding: 30px 16px;
  width: calc(100% - 200px - 400px);
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 1.2px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 16px;
  overflow-x: scroll;
`;