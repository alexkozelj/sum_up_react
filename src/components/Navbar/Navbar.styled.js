import styled from 'styled-components';

export const Navbar = styled.div`
   /* position: inline-block; */
   top: 0;
   z-index: 500;
   width: 100%;
   height: 5%;
   min-height:50px;
   /* background-color: #24221d; */
   background-image: linear-gradient(#292721 1%, black 90%);
   display: flex;
   /* grid-template-columns: repeat(16, 1fr); */
   justify-content: space-between;
   align-items: center;
`

export const Logo = styled.img`
   width: auto;
   height: 80%;
   min-height: 39px;
   /* grid-column-start: 2; */
   padding: 5px;
   margin-left:15px;
   /* grid-column-end: 3; */
`

export const ButtonWrapper = styled.div`
   display: flex;

   width: 100%;
   height: 80%;
   justify-content: end;
   margin-right: 5%;
	/* font-size: 1em; */
	/* margin: 1em;
	padding: 0.25em 1em; */
	/* border: 2px solid palevioletred;
	border-radius: 3px; */
`;

