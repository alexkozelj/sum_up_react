import styled from 'styled-components';
import {Button} from 'react-bootstrap';

export const Header = styled.div`
   width: 100%;
   height: 20vh;
   background-color: #7CA385;
   text-align: center;
   /* display: grid; */

`

export const StyledButton = styled(Button)`
   color: palevioletred;
   width: 100px;
   height: 50px;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

