import styled from 'styled-components';


export const TalkCloud = styled.div`
   
   display: flex;
   flex-direction: column;
   max-width: 150px;
   max-height: 50%;
   justify-content: center;
   align-items: center;
   /* position: absolute;
   top: 65px;
   left: 200px; */
   /* border: 3px solid black; */
   border-radius: 10px;
   opacity: 0.8;
   /* background-color: tomato; */
   text-align: center;
   /* display: grid; */

   .wrapper {

   }

   .opponentMessage {

      /* width: 68%;
      height: 60%; */
      position: absolute;
      top: 10%;
      left: 67%;
      font-size: 10px;
      word-wrap: break-word;
   }

   img {
      margin-top: 10px;

      /* position: absolute; */
      /* padding: 2px; */
      /* max-width: 100%; */
      /* max-height: 100%; */
      /* align-self: center; */
      /* opacity: 0.5; */
      /* justify-content: center; */
      max-width: 100%;
      max-height: 100%;
      padding: 2px;
      object-fit: contain;
      overflow: hidden;
   }


   @media (max-width: 440px) {
      p {
         font-size: 0.68em
      }
   }

`
