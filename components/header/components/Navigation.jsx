import styled from 'styled-components';
import Link from 'next/link';

export default function Navigation () {
  return(
    <NavigationContainer>
      <NavigationList>
        <ListItem>
          <Link href='/'><a>Главная</a></Link>
        </ListItem>
        <ListItem>
          <Link href='/'><a>Салоны оптики</a></Link>
        </ListItem>
        <ListItem>
          <Link href='/'><a>О компании</a></Link>
        </ListItem>
        <ListItem>
          <Link href='/'><a>События и скидки</a></Link>
        </ListItem>
        <ListItem>
          <Link href='/'><a>Видео</a></Link>
        </ListItem>
        <ListItem>
          <Link href='/'><a>Документы</a></Link>
        </ListItem>
        <ListItem>
          <Link href='/'><a>Контакты</a></Link>
        </ListItem>
      </NavigationList>
    </NavigationContainer>
  )
};

const NavigationContainer = styled.div`
  background-color: #0CAFC4;
  width: 100%;
`;
const NavigationList = styled.ul`
  list-style: none;
  max-width: 940px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const ListItem = styled.li`
  padding: 15px 0 15px 0;
  a {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
`;