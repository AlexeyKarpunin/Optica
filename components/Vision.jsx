import styled from 'styled-components';

export default function Vision () {
  return (
    <VisionSection>
      <VisionContent>
        <VisionText>
          <h1>
            Огромный 
            выбор очков, 
            линз и оправ
          </h1>
          <p>
            Центр оптической коррекции «TOPALOFF» 
            <br />
            является одной из лидирующих фирм
            <br />
            по подбору и продаже качественных очков в Астрахани. 
          </p>
        </VisionText>
      </VisionContent>
    </VisionSection>
  );
}

const VisionSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  background: url('/img/vision/vision-back.jpg');
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
  padding: 112px 0 0 0px;

  h1{
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    color: #3F3F3F;
    line-height: 1.2;
  }

  p{
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #636464;
  }

  @media (max-width: 1180px) {
    padding: 112px 0 0 10px;
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 38px;
    }
  }
  @media (max-width: 345px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 20px;
    }
  }
`;