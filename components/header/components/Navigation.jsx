import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation ({activeLink}) {
  const [mBtnStatus, setMBtnStatus] = useState(false);


  function toggleMBtnMenu() {mBtnStatus ? setMBtnStatus(false) : setMBtnStatus(true);}

  return(
    <NavigationContainer>
      <NavigationList status={mBtnStatus}>
        <ListItem className={activeLink === 'main' ? 'is-active-nav-link' : null}>
          <Link href='/'><a>Главная</a></Link>
        </ListItem>
        <ListItem className={activeLink === 'diagnostic' ? 'is-active-nav-link' : null}>
          <Link href='/vision-diagnostics'>
            <a>
              Диагностика
              {/* <br />
              {' '}
              зрения */}
            </a>
          </Link>
        </ListItem>
        <ListItem className={activeLink === 'lenses' ? 'is-active-nav-link' : null}>
          <Link href='/selection-of-lenses'><a>Подбор линз</a></Link>
        </ListItem>
        <ListItem className={activeLink === 'making' ? 'is-active-nav-link' : null}>
          <Link href='/glasses-making'>
            <a>
              Изготовление
              {/* <br />
              {' '}
              очков */}
            </a>
          </Link>
        </ListItem>
        <ListItem className={activeLink === 'tinting' ? 'is-active-nav-link' : null}>
          <Link href='/lens-tinting'><a>Тонировка линз</a></Link>
        </ListItem>
        <ListItem className={activeLink === 'componi' ? 'is-active-nav-link' : null}>
          <Link href='/about-compni'><a>О компании</a></Link>
        </ListItem>
        <ListItem className={activeLink === 'contacts' ? 'is-active-nav-link' : null}>
          <Link href='/contacts'><a>Контакты</a></Link>
        </ListItem>
      </NavigationList>
      <MobileBtn onClick={toggleMBtnMenu}>
        <svg className={mBtnStatus ? 'ham hamRotate ham1 active' : 'ham hamRotate ham1'} viewBox='0 0 100 100' width='50'>
          <path
            className='line top'
            d='m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40'
          />
          <path
            className='line middle'
            d='m 30,50 h 40'
          />
          <path
            className='line bottom'
            d='m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40'
          />
        </svg>
      </MobileBtn>
    </NavigationContainer>
  )
};

const MobileBtn = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background-color: #0CAFC4;
    border-radius: 5px;
    outline: none;
    display: none;
    @media (max-width: 1020px) {
      display: flex;
    }
`;

const NavigationContainer = styled.div`
  background-color: #0CAFC4;
  max-width: 1920px;
`;


const NavigationList = styled.ul`
  list-style: none;
  max-width: 940px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  
  

  @media (max-width: 1020px) {
    position: fixed;
    z-index: 10;
    top: 0;
    right: ${props => props.status ? '0' : '-300px'};
    justify-content: center;
    flex-direction: column;
    min-width: 220px;
    margin: 0;
    background-color: #0CAFC4;
    height: 100vh;
    transition-duration: 1s;
  }

  @media (max-width: 420px) {
    min-width: 100%;
    right: ${props => props.status ? '0' : '-600px'};
  }
`;

const ListItem = styled.li`
  padding: 15px 0 15px 0;
  position: relative;
  text-align: center;
  a {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
`;