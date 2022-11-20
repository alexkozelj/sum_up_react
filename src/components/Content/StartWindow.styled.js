import styled from 'styled-components';


export const StartWindow = styled.div`
   /* position: relative; */
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
   height: 95%;
   background-color: #7CB385;
   text-align: center;
   padding-top: 4vh;
   /* display: grid; */

   h1 {
      font-size: 1.4em;
   }

   h3 {
      font-size: 1em;
      /* margin: 0 !important; */
      margin: 20px 0 15px 0; 
   }

`

export const GameTypeWrapper = styled.div`
   display: flex;
   flex-direction: row;
   padding-bottom: 10px;

`

export const NumberOfGamesWrapper = styled.div`
   display: flex;
   flex-direction: row;
   padding-bottom: 10px;
`