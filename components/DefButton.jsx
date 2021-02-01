
import Link from 'next/link';
import styled from 'styled-components';

export default function DefButton ({text, styles, link, onClickFunc}) {

  return (
    <Link onClick={onClickFunc || null} href={link || '/'}>
      <Button styles={styles}>{text}</Button>
    </Link>
  );
}

const defaultCss = `background: linear-gradient(91.79deg, #1BC8D8 15.76%, #56C8E8 98.76%);
outline: none;
border: none;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
&:hover{
  cursor: pointer;
  background: linear-gradient(91.79deg, #00aab9 15.76%, #2d8ca7 98.76%);
}`

const Button = styled.button`${props => props.styles + defaultCss}`;