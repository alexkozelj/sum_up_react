import styled from "styled-components";

export const NavbarButton = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 1.4em;
   width: 6em;
   height: 100%;
   font-size: 0.8em;

   a {
      font-size: 1em;

      
   }

   @media (max-width: 400px) {
      a  {
         font-size: 0.8em
      }

      margin: 0 0.1em;
   }

   .text-box {

   }

   .btn:link,
   .btn:visited {
      text-transform: uppercase;
      text-decoration: none;
      padding: 0.3em  1em;
      display: inline-block;
      border: 1px solid grey;
      border-radius: 5px;
      transition: all 0.01s;
      position: absolute;
   }

   .btn:hover {
      border: 1px solid #9fa1a1;
   }

   .btn:active {
      transform: translateY(1px);
      box-shadow: 0px 5px 20px #282929 ;
      border-style: outset;
   }

   .btn-white {
      background-image: linear-gradient(#292721 7%, black 93%);
      background-color: #000;
      color: #fff;
   }

   .btn::after {
      /* content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 100px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s; */
   }

   /* .btn-white::after {
      background-color: #fff;
   } */
/* 
   .btn:hover::after {
      
   } */

   /* .btn-animated {
      animation: moveInBottom 5s ease-out;
      animation-fill-mode: backwards;
   }

   @keyframes moveInBottom {
      0% {
         opacity: 0;
         transform: translateY(30px);
      }

      100% {
         opacity: 1;
         transform: translateY(0px);
      }
   } */
`;
