import styled from "styled-components";

export const Scoreboard = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    max-width: 200px;
    /* height: 100%; */
    height: max-content;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    align-self: center;
    border: 2px solid white;
    border-radius: 20px;
    box-shadow: 2px 3px 10px black, 0 0 125px #7ca385 inset;
    /* background: #fffef0; */
    /* padding-top: 10px; */

    @media (max-width: 440px) {
      align-self: center;
      flex-direction: column;
      padding-top: 0;
    }
  
    .combiWrapper {
       font-size: 0.7em;
       
      @media (max-width: 440px) {
         padding-top: 5px;
         font-size: 8px;
      }
    }

  .gameInfoContainer {
    display: flex;
    flex-direction: column;
    /* padding: 0 0 10px 0; */
    width: 85%;
    height: 30%;
    background-color: #c3e6cb;
    border-radius: 15px;
    border: 0.5px solid white;
    margin: 0 0 10px 0;
    @media (max-width: 440px) {
      height: 85px;
      margin: 0 0 5px 0;
    }
  }

  .gameInfoHeader {
    height: max-content;
    padding: 4px 0;
    font-size: 0.9em;
    background-color: #333333;
    color: white;
    border-radius: 15px 15px 0 0;
    border: 0.5px solid white;
    @media (max-width: 440px) {
      font-size: 12px;
      padding: 5px 0;
    }
  }

  .gameInfo {
    border-bottom: 1px solid white;
  }
  .gameInfo,
  .dealInfo {
    text-align: center;
    font-size: 0.7em;
    /* border-bottom: 1px solid white; */
    padding: 0.6em;
    @media (max-width: 440px) {
      font-size: 10px;
    }
  }

  .resultContainer {
    display: flex;
    flex-direction: column;
    background-color: #ffeeba;
    width: 85%;
    /* height: 50vh; */
    /* height: max-content; */
    padding: 0 0 15px 0;
    justify-content: flex-start;
    /* align-items: center; */
    /* border-left: 1px solid black;
      border-right: 1px solid black; */
    border: 0.5px solid white;
    border-radius: 12px;
    /* padding: 15px; */
    align-items: center;
    @media (max-width: 440px) {
      height: max-content;
      /* padding-bottom: 10px; */
      /* max-height: 210px; */
    }
  }

  .resultHeader {
    background-color: #333333;
    width: 100%;
    padding: 5px;
    font-size: 0.9em;
    color: white;
    border-radius: 11px 11px 0 0;
    border: 0.5px solid white;
    @media (max-width: 440px) {
      padding: 5px;
      font-size: 12px;
    }
  }

  .resultWrapper {
    display: flex;
    flex-direction: row;
    background-color: #ffeeba;
    width: 95%;
    /* height: max-content; */
    justify-content: center;
    align-items: flex-start;
    /* border-radius: 12px; */
    /* border-left: 1px solid black;
      border-right: 1px solid black; */
    /* border: 1px solid black; */
    /* border-radius: 12px;
    padding: 15px; */
    @media (max-width: 440px) {
    }
  }

  .scoreHeader {
    width: 100%;
    height: 20px;
    background-color: black;
    @media (max-width: 440px) {
    }
  }

  .opponentScoreContainer {
    border-right: 1px solid grey;
    @media (max-width: 440px) {
    }
  }

  .opponentScoreContainer,
  .playerScoreContainer {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    /* height: max-content; */
    border-bottom: 1px solid grey;
    /* margin: 0 5px; */
    @media (max-width: 440px) {
    }
  }

  .opponentName,
  .playerName {
    width: 100%;
    font-size: 0.9em;
    font-weight: bold;
    border-bottom: 1px solid grey;
    padding: 5px;
    @media (max-width: 440px) {
      padding: 5px;
      font-size: 11px;
      padding: 2px;
      /* color: green; */
    }
  }

  .opponentScore,
  .playerScore {
    font-size: 0.9em;
    padding: 2px;
    width: 100%;
    border-bottom: 1px solid grey;
    @media (max-width: 440px) {
      font-size: 12px;
    }
  }

  .tablaWrapper {
    padding: 5px 0 0 0;
  }

  .tabla {
    position: relative;
    height: 20px;
    font-size: 0.7em;
    width: 100%;
    @media (max-width: 440px) {
      height: 15px;
      font-size: 8px;
      text-align: center;
    }
  }

  .tabla span:nth-child(4) {  
      /* margin-right: 2px; */
      @media (max-width: 440px) {
         margin-right: 2px;
      }
   }

  .tabla span:nth-child(9) {  
      /* margin-right: 2px; */
      @media (max-width: 440px) {
         margin-right: 2px;
      }
   }

  .tablaCross4 {
    position: absolute;
    left: -3px;
    bottom: 7px;
    transform: rotate(-15deg);
    @media (max-width: 440px) {
      left: -2px;
      bottom: 6px;
    }
  }

  .tablaCross9 {
    position: absolute;
    left: -4px;
    bottom: 5px;
    transform: rotate(-15deg);
    @media (max-width: 440px) {
      left: 8px;
      bottom: 6px;
    }
  }

  .tablaCross14 {
    position: absolute;
    left: -4px;
    bottom: 5px;
    transform: rotate(-15deg);
    @media (max-width: 440px) {
      left: 18px;
      bottom: 6px;
    }
  }

  .tablaCross14 {
    position: absolute;
    left: -4px;
    bottom: 5px;
    transform: rotate(-15deg);
    @media (max-width: 440px) {
      left: 18px;
      bottom: 6px;
    }
  }

  .cardsSumWrapper {
     /* height: */
     padding: 0 5px;
     width: 70%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     @media (max-width: 440px) {
      padding: 0;
    }
  }

  .cardsSum {
    padding: 0 0 5px 0;
    font-style: italic;
    font-size: 0.7em;
    @media (max-width: 440px) {
      font-size: 7px;
      font-style: italic;
      padding: 0 0 5px 0;
    }
  }

  .sumTitle {
    font-style: italic;
    font-size: 0.7em;

    @media (max-width: 440px) {
      font-size: 7px;
    }
  }

  .overallResultWrapper {
    width: 95%;
    background-color: #f9e3a0e6;
    padding: 5px 1px;
    font-size: 0.9em;
    font-weight: bold;
    border-bottom: 1px solid grey;
    @media (max-width: 440px) {
      padding: 5px 1px;
    }
  }

  .overallResult {
    width: 100%;
    @media (max-width: 440px) {
      font-size: 8px;
    }
  }

  .totalResultWrapper {
    display: flex;
    width: 95%;
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid grey;
    @media (max-width: 440px) {
      font-size: 8px;
    }
  }

  .totalResultOpponent {
    border-right: 1px solid grey;
    @media (max-width: 440px) {
    }
  }

  .totalResultOpponent,
  .totalResultPlayer {
    background-color: #f9e3a0e6;
    width: 100%;
    padding: 5px 0;
    font-size: 1em;
    font-weight: bold;
    @media (max-width: 440px) {
      padding: 3px 0;
      font-size: 12px;
    }
  }
`;
