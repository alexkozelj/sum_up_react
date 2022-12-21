import styled from "styled-components";

export const StartGameButton = styled.div`
   .wrapper {
      /* position: absolute;
      top: 50%;
      left: 50%; */
      /* transform: translate(-50%, -50%); */
      width: fit-GameWindow;
      height: auto;
      padding: 10px;
      margin: 20px 0;
   }

   button {
      max-width: 200px;
      max-height: 50px;
      background: linear-gradient(to left top, #b54936 50%, #a54730 50%);
      border-style: none;
      border-radius: 8px;
      color: #fff;
      font-size: 1em;
      letter-spacing: 3px;
      font-family: "Lato";
      font-weight: 600;
      outline: none;
      cursor: pointer;
      position: relative;
      padding: 10px 20px;
      overflow: hidden;
      transition: all 0.5s;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
   }
   button span {
      position: absolute;
      display: block;
   }
   button span:nth-child(1) {
      height: 3px;
      width: 200px;
      top: 0px;
      left: -200px;
      background: linear-gradient(to right, rgba(0, 0, 0, 0), #f6e58d);
      border-top-right-radius: 1px;
      border-bottom-right-radius: 1px;
      animation: span1 2s linear infinite;
      animation-delay: 1s;
   }

   @keyframes span1 {
      0% {
         left: -200px;
      }
      100% {
         left: 200px;
      }
   }
   button span:nth-child(2) {
      height: 70px;
      width: 3px;
      top: -70px;
      right: 0px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #f6e58d);
      border-bottom-left-radius: 1px;
      border-bottom-right-radius: 1px;
      animation: span2 2s linear infinite;
      animation-delay: 2s;
   }
   @keyframes span2 {
      0% {
         top: -70px;
      }
      100% {
         top: 70px;
      }
   }
   button span:nth-child(3) {
      height: 3px;
      width: 200px;
      right: -200px;
      bottom: 0px;
      background: linear-gradient(to left, rgba(0, 0, 0, 0), #f6e58d);
      border-top-left-radius: 1px;
      border-bottom-left-radius: 1px;
      animation: span3 2s linear infinite;
      animation-delay: 3s;
   }
   @keyframes span3 {
      0% {
         right: -200px;
      }
      100% {
         right: 200px;
      }
   }

   button span:nth-child(4) {
      height: 70px;
      width: 3px;
      bottom: -70px;
      left: 0px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0), #f6e58d);
      border-top-right-radius: 1px;
      border-top-left-radius: 1px;
      animation: span4 2s linear infinite;
      animation-delay: 4s;
   }
   @keyframes span4 {
      0% {
         bottom: -70px;
      }
      100% {
         bottom: 70px;
      }
   }

   button:hover {
      transition: all 0.5s;
      transform: scale(1.1);
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
   }
   button:hover span {
      /* animation-play-state: paused; */
  }
`;
