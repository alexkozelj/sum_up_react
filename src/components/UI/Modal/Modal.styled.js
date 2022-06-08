import styled from "styled-components";

export const ModalContainer = styled.div`
   position: fixed;
   display: flex;
   align-items: center;
   width: 100%;
   height: 100%;
   z-index: 1000;
  
  /* this is what centers your element in the fixed wrapper*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; /* aligns on vertical for column */
  align-items: center; /* aligns on horizontal for column */
  
`

export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 200;
   background-color: rgba(0, 0, 0, 0.75);
`

export const Modal = styled.div`
   position: fixed;
   
  width: 40%;
  height: 70%;
  /* this is what centers your element in the fixed wrapper*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; /* aligns on vertical for column */
  align-items: center; /* aligns on horizontal for column */
  
   background-color: white;
   padding: 1rem;
   border-radius: 14px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
   z-index: 210;
   animation: slide-down 300ms ease-out forwards;
   display: flex;
   flex-direction: column;
   justify-content: center;
   
   > img {
      object-fit: contain;
      width: 80%;
      max-height: 50%;
   }
   > h1 {
      font-size: 2em;
   }
   > div, h1 {
      /* font-size: 2em; */
      display: flex;
      justify-content: center;
      padding: 10px 0;
   }

   h2 {
      font-size: 1em;
      text-align: center;
      margin: 0;
      /* padding: 0 !important; */
   }

   .wrapper {
      padding: 0;
   }
   @media (max-width: 480px) {
      width: 80%;
    }
   
   @keyframes slide-down {
     from {
       opacity: 0;
       transform: translateY(-3rem);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   }
`

