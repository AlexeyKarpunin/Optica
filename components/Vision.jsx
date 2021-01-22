import styled from 'styled-components';

export default function Vision () {
  return (
    <VisionSection>
      <VisionContent>
        <VisionText>
          <h1>
            Диагностика
            <br />
            зрения
          </h1>
          <p>
            Компания «Атмосфера слуха» является 
            <br />
            одной из лидирующих фирм
            <br />
            по продаже слуховых аппаратов. 
          </p>
        </VisionText>
      </VisionContent>
    </VisionSection>
  );
}

const VisionSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  background: url('/img/vision.jpg');
  height: 628px;
  background-position: center;
  background-size: cover;

  @media (max-width: 675px) {
    background: url('/img/vision-mobile.jpg');
    background-position: center;
    background-size: cover;
  }
`;
const VisionContent = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;
const VisionText = styled.div`
  max-width: 450px;
  padding: 112px 0 0 51px;
  h1{
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    color: #3F3F3F;
  }
  p{
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #636464;
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 38px;
    }
  }
`;