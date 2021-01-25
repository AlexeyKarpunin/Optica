import styled from 'styled-components';

export default function LogoText() {
  return(
    <Text>
      <TextBold>
        Атмосфера слуха
        <br />
      </TextBold>
      <TextNormal>
        Федеральная сеть
        <br />
      </TextNormal>
      <TextNormal>
        центров коррекции слуха
        <br />
      </TextNormal>
    </Text>  
  );
} 

const Text = styled.div`
  margin-top: 16px;
  margin-left: 50px;
  @media (max-width: 495px) {
    display: none;
  }
`;

const TextBold = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #1C8594;
  letter-spacing: 0.05em;
`;

const TextNormal = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #1C626B;
  letter-spacing: 0.05em;
`;
