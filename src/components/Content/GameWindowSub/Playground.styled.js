import styled from "styled-components";

export const Playground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60%;

  .playgroundCardsWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100%;
    padding: 10px;
    margin-right: 15px;
    background-color: #7ca385;
    border-radius: 15px;
    border: 1px solid white;
  }

  .cardsWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: center;
    align-items: center;
  }

  .playgroundCard {
    width: 35px;
    height: 60px;
  }

  .scoreWrapper {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 90%;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid white;
    border-radius: 15px;
    box-shadow: 2px 3px 10px black, 0 0 125px #7ca385 inset;
    /* background: #fffef0; */
    /* padding-top: 10px; */

    @media (max-width: 440px) {
      flex-direction: column;
    }
  }

  .scoreHeader {
    width: 100%;
    height: 20px;
    background-color: black;
  }

  .resultContainer {
    display: flex;
    flex-direction: row;
    background-color: #fcff00;
    width: 100%;
    height: 99%;
    justify-content: space-around;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-radius: 12px;
    padding: 15px;
  }

  .tabla {
    height: 50px;
  }

  .tablaCross {
    position: relative;
    left: 2px;
    bottom: 30px;
    transform: rotate(15deg);
  }

  .cardsSum {
    font-size: 9px;
  }

  .sumTitle {
    font-size: 9px;
  }
`;
