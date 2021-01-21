import styled from 'styled-components';

export default function Info () {
  return (
    <InfoWrraper>
      <h2>Информация</h2>
      <ul>
        <li>
          <img style={{width:'19px', height: '25px'}} src='/img/vector-white.png' alt='vector' />
          <span>ул. Боевая, 14</span>
        </li>
        <li>
          <img style={{width:'17px', height: '17px', marginTop: '3px',}} src='/img/call-white.png' alt='call' />
          <a href='tel:8 (800) 201-06-72'>8 (800) 201-06-72</a>
        </li>
      </ul>
    </InfoWrraper>
  );
}

const InfoWrraper = styled.div`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0;
    color: #FFFFFF;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    display: flex;
    line-height: 2;
    margin-top: 20px;
  }

  ul li span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #1C626B;
  }
  ul li a {
    font-family: Uni Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #1C626B;
  }

  ul li img {
    margin-right: 11px;
  }
`;