import styled from 'styled-components';


export const Avatar = styled.div`
   
   display: flex;
   flex-direction: column;
   max-width: 50%;
   max-height: 200px;
   justify-content: center;
   align-items: center;
   position: relative;
   border-radius: 10px;
   opacity: 0.8;
   text-align: center;

   .wrapper {
      display: flex;
      height: 85px;

      justify-content: center;
      border: 5px solid #b54936;
      border-radius: 10px;
      background-color: black;
      text-align: center;
   }
   
   img {
      max-width: 100%;
      height: 100%;
      height: 75px;
      padding: 2px;
      object-fit: contain;
      overflow: hidden;
   }

   p {
      font-size: 1.2em;
      padding: 5px;
      margin-bottom: 0 !important;
   }

   @media (max-width: 440px) {
      p {
         font-size: 1.5em
      }
   }


`
