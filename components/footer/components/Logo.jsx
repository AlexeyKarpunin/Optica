import Link from 'next/link';
import styled from 'styled-components';

export default function Logo () {
  return (
    <LogoWrapper>
      <ImgWrraper>
        <img src='/img/logo-footer.png' alt='logo' style={{width: '150px', margin: '-5px 0 0 0'}} />
        <span>Центр оптики</span>
      </ImgWrraper>
      <ul> 
        <li><Link href='/'><a>Главная</a></Link></li>
        <li><Link href='/'><a>О компании</a></Link></li>
        <li><Link href='/'><a>Скидки</a></Link></li>
        <li><Link href='/'><a>Контакты</a></Link></li>
      </ul>
    </LogoWrapper>
  );
}
const ImgWrraper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 385px) {
    align-items: center;
  }
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
  }
`;
const LogoWrapper = styled.div`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
l   line-height: 32px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 8px 0 0 0;
    list-style: none;
  }

  ul li a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #1C626B;
  }

  ul li {
    line-height: 1.5;
  }

  ul li a:hover {
    border-bottom: 1px solid #1C626B
  }
`;