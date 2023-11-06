import {Container, MenuItem, MenuTitle} from "./index.styles";

const Menu = ({menu, activeMenu}) => {
  return (
    <Container>
      <MenuTitle>{menu.header}</MenuTitle>
      {menu.list.map((item, index) => (
        <MenuItem active={activeMenu === item.title} key={index}>{item.title}</MenuItem>
      ))}
    </Container>
  );
};

export default Menu;