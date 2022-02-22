import styled from 'styled-components';


export const App = styled.div`
   /* display: grid; */
   /* grid-template-rows: 1fr 19fr; */
   position: relative;
   display: flex;
   flex-direction: column;
   width: 100vw;
   height: 100vh;
   background-color: #77BD98;
   text-align: center;

   /*  landscape  */
   @media (max-height: 430px) {
      /* color: orange; */
      /* body { */
            transform: rotate(-90deg);
            transform-origin: left top;
            width: 100vh;
            height: 100vw;
            overflow-x: hidden;
            position: absolute;
            top: 100%;
            left: 0;
         /* } */
   }
   

`

