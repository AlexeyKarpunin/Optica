import Link from 'next/link';
import styled from 'styled-components';

export default function Servisec () {
  return (
    <ServisecWrraper>
      <h2>Услуги</h2>
      <ul>
        <li><Link href='/vision-diagnostics'><a>Диагностика зрения</a></Link></li>
        <li><Link href='/selection-of-lenses'><a>Подбор оправ</a></Link></li>
        <li><Link href='/glasses-making'><a>Изготовление очков</a></Link></li>
        <li><Link href='/lens-tinting'><a>Тонировка линз</a></Link></li>
        <li><Link href='/about-componi'><a>О компании</a></Link></li>
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