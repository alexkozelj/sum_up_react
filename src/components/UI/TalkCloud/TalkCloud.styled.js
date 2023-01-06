import styled from 'styled-components';


export const TalkCloud = styled.div`
   
   display: flex;
   /* flex-direction: column; */
   /* max-width: 150px; */
   max-height: 100%;
   width: 150px;
   justify-content: flex-start;
   align-items: center;
   position: relative;
   /* position: absolute;
   top: 65px;
   left: 200px; */
   /* border: 3px solid black; */
   border-radius: 10px;
   opacity: 0.8;
   /* background-color: tomato; */
   text-align: center;
   /* display: grid; */
   @media (max-width: 440px) {
      width: 100px;
      /* bottom: 10px;
      left: -15px; */
   }

   .container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: max-content;
      height: 47%;
      bottom: 32%;
      left: 15%;
      font-size: 0.9em;
      word-wrap: break-word;
   }


   .wrapper {
      position: relative;
      width: max-content;
      height: 100%;
   }

   .cloudWrapper {
      width: max-content;
      height: 80px;
      @media (max-width: 440px) {
         /* height: 40px; */
      }
   }


   img {
      /* margin-top: 10px; */

      width: 160px;
      max-height: 65px;
      padding: 2px;
      /* object-fit: contain; */
      overflow: hidden;
      @media (max-width: 440px) {
         /* width: 140px */
         /* height: 60px; */
         /* max-width: 50px; */
      }
   }

   .message1 {
      font-size: 16px;
      /* background-color: lightgreen; */
      font-weight: ${props => props.info.font};
      color: ${props => props.info.font === '800' ? '#770dc3' : 'black'};
      position: relative;
      bottom: 3em;
      padding: 0 2em 0 2.3em;
      width: max-content;
      /* overflow: hidden; */
      white-space: nowrap;
      margin: 0;
      font-family: 'Good time';
      @media (max-width: 440px) {
         /* display: inline-block; */
         /* width: 50px; */
         /* display: flex;
         align-self: center; */
         padding: 0 2em 0 2.8em;
         word-wrap: break-word;
         font-size: 15px;
         bottom: 60%;
      }  
   }


`
