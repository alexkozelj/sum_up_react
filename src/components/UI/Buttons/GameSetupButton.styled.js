import styled from "styled-components";

export const GameSetupButton = styled.div`

   background: ${props => {
      // console.log('FEWFEWFEW',props)
      return props.selected ? '#b54936' : '#51A3B8'
   }}; 
   font-size: 11px;
   color :${props => {
      // console.log('FEWFEWFEW',props)
      return props.selected ? 'white' : 'white'
   }}; 
   /* color: white; */
   border-radius: 7px;
   box-shadow: 0 5px 0px #387796;
   display: inline-block;
   transition: all .1s;
   position: relative;
   padding: 2px 8px;
   position: relative;
   top: 0;
   cursor: pointer;
   margin:0 3px;

:active {
   top: 3px;
   box-shadow: 0 2px 0px #388796;
   transition: all .1s;
} 

.selected {
   background: tomato;
}

`