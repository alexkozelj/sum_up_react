import styled from "styled-components";

const backgroundColor = '#f9e3a0e6'

export const Scoreboard = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 30%;
    max-width: 200px;
    min-width: 145px;
    /* height: 100%; */
    height: max-content;
    padding: 5px 0 10px 0;
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
      min-width: 115px;
    }
  
    .combiWrapper {
      height: 15px; 
      font-size: 9px;
       
      @media (max-width: 440px) {
         padding-top: 1px;
         height: 13px; 
         font-size: 8px;
      }
    }

  .gameInfoContainer {
    display: flex;
    flex-direction: column;
    /* padding: 0 0 10px 0; */
    width: 95%;
    height: 30%;
    background-color: #c3e6cb;
    border-radius: 15px;
    border: 0.5px solid white;
    margin: 0 0 10px 0;
    @media (max-width: 440px) {
      height: 75px;
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
      font-size: 9px;
      padding: 3px;
    }
  }

  .resultContainer {
    display: flex;
    flex-direction: column;
    background-color: #ffeeba;
    width: 95%;
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

  .gameResultWrapper {
    display: flex;
    flex-direction: row;
    width: 95%;
    justify-content: center;
    align-items: flex-start;
    
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

  .opponentScoreContainer,
  .playerScoreContainer {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 440px) {
    }
  }

  .opponentName,
  .playerName {
    width: 100%;
    font-size: 0.9em;
    font-weight: bold;
    padding: 5px;
    @media (max-width: 440px) {
      padding: 5px;
      font-size: 11px;
      padding: 2px;
      /* color: green; */
    }
  }
  
  .plus-one {
   /* visibility: hidden; */
   /* color: #3f3f3f; */
   /* background-color: tomato; */
   color: lightseagreen;
   width:15px;
   height:15px;
   font-size: 15px;
   position: absolute;
   left: 62%;
   /* transform: translate(-50%, -50%); */
   animation-name: fade-in-up;
   animation-duration: 2s;
   animation-iteration-count: 1;
   animation-timing-function: ease;
   @media (max-width: 440px) {
      left: 65%;
      font-size: 12px;
    }
}

   @keyframes fade-in-up {
      0%,
      10% {
         top: 13%;
         opacity: 1;
      }
      100% {
         top: -70%;
         opacity: 0;
      }
   }
  .opponentScore,
  .playerScore {
    height:34px;
    position: relative;
    font-size: 16px;
    padding: 2px;
    width: 100%;
    border-bottom: 1px solid grey;
    @media (max-width: 440px) {
      height:30px;
      font-size: 15px;
    }
  }

  
  .tablaWrapper {

   display: flex;
   flex-direction: column;
   width: 95%;
   justify-content: center;
   align-items: flex-start;
   
   @media (max-width: 440px) {
   }

}

   .tablaTitle {
      width: 100%;
      height: 20px;
      background-color: ${backgroundColor};
      font-size: 12px;
      font-weight: 450;
      font-family: "Good Look", "Helvetica Ne";
      letter-spacing: 2px;
      border-bottom: 1px solid grey;
   }

   .tablaFiledWrapper {
      display: flex;
      width: 100%;
   }

  .tablaField {
   display: flex;
   align-items: center;
   width: 50%;
   height: 25px;
   background-color: ${backgroundColor};
    /* padding: 5px 0 0 0; */
  }

  .tabla {
    position: relative;
    justify-content: flex-start;
    display: flex;
    padding: 0 25%;
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
      margin-right: 5px;
      @media (max-width: 440px) {
         margin-right: 2px;
      }
   }

  .tabla span:nth-child(9) {  
      margin-right: 5px;
      @media (max-width: 440px) {
         margin-right: 2px;
      }
   }

  .tablaCross4 {
    position: absolute;
    margin-right: 2px;
    /* left: 24px; */
    bottom: 1px;
    transform: rotate(-204deg);
    @media (max-width: 440px) {
      left: 15px;
      bottom: 2px;
    }
  }

  .tablaCross9 {
    position: absolute;
    margin-right: 2px;
    left: 35px;
    bottom: 7px;
    transform: rotate(-15deg);
    @media (max-width: 440px) {
      left: 20px;
      bottom: 6px;
    }
  }

  .tablaCross14 {
    position: absolute;
    left: 51px;
    bottom: 7px;
    transform: rotate(-15deg);
    @media (max-width: 440px) {
      left: 26px;
      bottom: 6px;
    }
  }

  .takenCardsWrapper {
   width: 100%;
   display: flex;
   flex-direction: column;
  }

  .cardsSumTitle {
      width: 100%;
      height: 20px;
      background-color: ${backgroundColor};
      font-size: 12px;
      font-weight: 450;
      font-family: "Good Look", "Helvetica Ne";
      letter-spacing: 1px;
      border-bottom: 1px solid grey;
   }

  .cardsSumWrapper {
     /* height: */
     /* padding: 0 5px; */
     width: 100%;
     display: flex;
     flex-direction: row;
     /* justify-content: space-between; */
     @media (max-width: 440px) {
      padding: 0;
    }
  }

  .cardsSumField {
     /* height: */
     padding: 0 5px;
     width: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 13px;
     font-weight: 400;
     font-family: "Good Look", "Helvetica Ne";
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
    padding: 5px 1px;
    font-size: 15px;
    font-weight: bold;
    border-bottom: 1px solid grey;
    @media (max-width: 440px) {
      font-size: 12px;
      padding: 5px 1px;
    }
  }

  .overallResult {
    width: 100%;
    @media (max-width: 440px) {
      font-size: 11px;
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
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    font-weight: bold;
    @media (max-width: 440px) {
      padding: 3px 0;
      font-size: 15px;
    }
  }

  .borderRight {
   border-right: 1px solid grey;
  }
  .borderLeft {
   border-left: 1px solid grey;
  }
  .borderBottom {
   border-bottom: 1px solid grey;
  }
  .borderBottom-2 {
   border-bottom: 2px solid grey;
  }
  .borderTop {
   border-top: 1px solid grey;
  }

  .titleColor {
   background-color: #f9e3a0e6;
  }

  .scoreColor {
   background-color: #ffeeba;
  }

  .padding-5 {
   padding: 5px 0;
  }

  .title {
   font-size: 11px;
   letter-spacing: 1px;
   font-weight: 400;
   padding: 2px 0;
   font-family: "Good Lookup", "Helvetica Neue";
   @media (max-width: 440px) {
      font-size: 9px;
   }
  }
`;
