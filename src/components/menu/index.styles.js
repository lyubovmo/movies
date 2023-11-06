import styled, {css} from "styled-components";

export const Container = styled.div`
  padding: 30px 0;
  cursor: pointer;
`;
export const MenuTitle = styled.div`
  padding: 0 24px 16px;
  color: #676c7f;
  font-size: 12px;
`;

export const MenuItem = styled.div`
  padding: 12px 24px;
  color: ${(props) => props.active ? '#0e7bda' : '#ffffff'};
  font-size: 14px;
  background: ${(props) => props.active ? '#2c2f3e' : 'transparent'};
  ${(props) => props.active && css`
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 2px;
      background-color: #0e7bda;
    }
  `}
`;