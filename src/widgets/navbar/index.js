import {Container, Highlighted, Title} from "./index.styles";
import {useMemo, useState} from "react";
import Menu from "../../components/menu";

const Navbar = () => {
  const [ activeMenu, setActiveMenu ] = useState('Home');

  const sections = useMemo(() => {
    return [{
      header: 'Menu',
      list: [{
        title: 'Home',
      }, {
        title: 'Favorite',
      }, {
        title: 'Purchase'
      }, {
        title: 'Reminder',
      }],
    }, {
      header: 'Other',
      list: [{
        title: 'Playlist'
      }, {
        title: 'Live'
      }, {
        title: 'Bookmarks'
      }, {
        title: 'Settings',
      }]
    }]
  }, []);

  return (
    <Container>
      <Title><Highlighted>Mov</Highlighted>.time</Title>
      {sections.map((section, index) => (
          <Menu menu={section} key={index} activeMenu={activeMenu}/>
      ))}
    </Container>
  );
};

export default Navbar;