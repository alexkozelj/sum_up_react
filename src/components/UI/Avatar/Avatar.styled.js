import styled from 'styled-components';


export const Avatar = styled.div`
   
   display: flex;
   flex-direction: column;
   max-width: 50%;
   max-height: 50%;
   justify-content: center;
   align-items: center;
   position: relative;
   /* border: 3px solid black; */
   border-radius: 10px;
   opacity: 0.8;
   /* background-color: tomato; */
   text-align: center;
   /* display: grid; */

   .wrapper {
      display: flex;
      /* position: relative; */
      max-width: 50%;
      max-height: 50%;
      justify-content: center;
      /* max-width: 100px; */
      /* height: 100px; */
      border: 5px solid #b54936;
      border-radius: 10px;
      /* opacity: 0.8; */
      background-color: black;
      text-align: center;
      /* display: grid; */
   }
   
   img {
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

   p {
      font-size: 2em;
      padding: 5px;
   }

   @media (max-width: 440px) {
      p {
         font-size: 1.5em
      }
   }

`
