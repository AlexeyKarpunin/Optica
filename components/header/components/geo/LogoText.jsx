import styled from 'styled-components';

export default function LogoText() {
  return(
    <Text>
      <TextBold>
        ЦЕНТР ОПТИЧЕСКОЙ КОРРЕКЦИИ
        <br />
      </TextBold>
    </Text>  
  );
} 

const Text = styled.div`
  margin: 10px 0 3px 50px;

  @media (max-width: 940px) {
    margin: 0 auto;
  }

  @media (max-width: 310px){
    text-align: center;
  }
  
`;

const TextBold = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #1C8594;
  letter-spacing: 0.05em;
`;


