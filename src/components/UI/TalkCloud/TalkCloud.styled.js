import styled from 'styled-components';


export const TalkCloud = styled.div`
   
   display: flex;
   /* flex-direction: column; */
   max-width: 150px;
   max-height: 100%;
   justify-content: center;
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
      max-width: 96px;
   }

   .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
   }

   .opponentMessage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 75%;
      height: 47%;
      bottom: 32%;
      left: 15%;
      font-size: 16px;
      word-wrap: break-word;
   }

   img {
      /* margin-top: 10px; */

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

   .message1 {
      font-size: 16px;
      margin: 0;
      font-family: "Comic Sans MS", "Comic Sans", cursive;
      @media (max-width: 440px) {
         font-size: 14px;
      }  
   }


`
