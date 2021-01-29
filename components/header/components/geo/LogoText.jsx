import styled from 'styled-components';

export default function LogoText() {
  return(
    <Text>
      <TextBold>
        ЦЕНТР ОПТИКИ
        <br />
      </TextBold>
      {/* <TextNormal>
        Федеральная сеть
        <br />
      </TextNormal> */}
      {/* <TextNormal>
        центр коррекции слуха
        <br />
      </TextNormal> */}
    </Text>  
  );
} 

const Text = styled.div`
  margin: 16px 0 3px 50px;

  @media (max-width: 940px) {
    margin: 0 auto;
  }
  
`;

const TextBold = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #1C8594;
  letter-spacing: 0.05em;
`;

// const TextNormal = styled.span`
//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   color: #1C626B;
//   letter-spacing: 0.05em;
//   margin-bottom: 5px;
// `;
