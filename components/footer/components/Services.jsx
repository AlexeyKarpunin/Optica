import Link from 'next/link';
import styled from 'styled-components';

export default function Servisec () {
  return (
    <ServisecWrraper>
      <h2>Услуги</h2>
      <ul>
        <li><Link href='/'><a>Проверка слуха</a></Link></li>
        <li><Link href='/'><a>Выезд на дом</a></Link></li>
        <li><Link href='/'><a>Бесплатная консультация</a></Link></li>
        <li><Link href='/'><a>Компенсация от ФСС</a></Link></li>
        <li><Link href='/'><a>Беспроцентная рассрочка</a></Link></li>
      </ul>
    </ServisecWrraper>
  );
}

const ServisecWrraper = styled.div`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
  }
  ul {
    padding: 0;
  }
  ul li {
    list-style-type: none;
    &:before {
      content: " ";
      width: 4px;
      height: 4px;
      background: #1C626B;
      border-radius: 50%;
      display: inline-block;
      margin-right: 11px;
    }
  }
  ul li a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #1C626B;
  }

  ul li a:hover {
    border-bottom: 1px solid #1C626B
  }
`;