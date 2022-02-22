import styled from "styled-components";

export const GameWindow = styled.div`
  display: flex;
  width: 100%;
  height: 95%;
  padding: 10px;
  justify-content: center;
  /* background-color: orange; */
  background-color: #77bd98;
  /* text-align: center; */
  /* display: grid; */
  > div {
    /* width: 100px;
         height: 100px; */
    /* border: 2px solid red;
    margin: 5px; */
    /* background-color: red; */
  }

  /* .test {
      width: 100px;
      height: 100px;
   } */

  .playgroundWrapper {
    width: 100%;
    max-width: 1440px;

    > div {
      /* width: 100px;
         height: 100px; */
      /* border: 2px solid red; */
      /* margin: 1%; */
      /* background-color: red; */
    }
  }

  .opponentField {
    display: flex;
    flex-direction: row;
    height: 20%;
  }

   .playground {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 60%;
      
      .tableCardsWrapper {
         width: 75%;
         height: 100%;
         border: 2px solid red;
      }

      .scoreWrapper {
         width: 25%;
         height: 90%;
         border: 2px solid red;
      }

   }

  .playerField {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20%;
  }
`;