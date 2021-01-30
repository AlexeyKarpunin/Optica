import styled from 'styled-components';

export default function Map () {
  return (
    <MapSection>
      <MapContainer>
        <h1>Контакты</h1>
        <iframe frameBorder='no' style={{border: '1px solid #a3a3a3', boxSizing: 'border-box', maxWidth: '1170px'}} width='100%' height='605' src='https://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A46.33896038641083%2C%22lon%22%3A48.022347451696994%2C%22zoom%22%3A17%7D%2C%22opt%22%3A%7B%22city%22%3A%22astrakhan%22%7D%2C%22org%22%3A%221126429188192120%22%7D' />
      </MapContainer>
    </MapSection>
  );
}


const MapSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  background: url(/img/contacts/background.jpg) no-repeat;
  background-position: center;
  background-size: cover;
`;

const MapContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 0 100px 0;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: #1C626B;
  }
`;
