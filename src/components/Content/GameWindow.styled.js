import styled from "styled-components";

const cardWidth = "35px";
const cardHeight = "55px";
const cardPadding ='3px';
const cardHeight_Mobile = "45px";
const cardWidth_Mobile = "25px";
const cardPadding_Mobile ='1px';

const top_Mobile1 = "12px";
const top_Mobile2 = "6px";
const top_Mobile3 = "3px";
const top_Mobile4 = "3px";
const top_Mobile5 = "6px";
const top_Mobile6 = "12px";

const left_Mobile1 = "5px";
const left_Mobile2 = "12px";
const left_Mobile3 = "20px";
const left_Mobile4 = "30px";
const left_Mobile5 = "40px";
const left_Mobile6 = "50px";

export const GameWindow = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
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

  .gameWindowWrapper {
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
    justify-content: center;
    align-items: flex-end;
    flex-direction: row;
    height: 20%;
    /* margin: 1vh 0 3vh 0; */
  }

  .opponentFieldContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 70%;
    height: 100%;
    max-width: 950px;
    margin-right: 30px;
    /* margin-left: 26vw; */
    @media (max-width: 1440px) {
      /* margin-left: 12vw; */
      width: 100%;
      margin-right: 0;
    }
    @media (max-width: 480px) {
      width: 100%;
      /* justify-content: flex-start; */
      margin-right: 0;
    }
  }

  .opponentFieldBuffer {
    width: 30%;
    max-width: 200px;
    @media (max-width: 480px) {
      display: none;
    }
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
    height: 18%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    @media (max-width: 480px) {
      width: 100%;
      height: 22%;
    }
  }

  .playerFieldCardsWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
    max-width: 950px;
    margin-right: 30px;
    @media (max-width: 480px) {
      width: 100%;
      margin-right: 0;
    }
  }

  .playerFieldBuffer {
    display: flex;
    flex-direction: row;
    width: 30%;
    max-width: 200px;
    @media (max-width: 480px) {
      display: none;
    }
  }

  .opponentTalkCloudWrapper {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: flex-start;
    height: 90px;
    /* bottom: 7px;
    right: 2px; */

      
   .opponentAvatarWrapper {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: flex-start;
      width: 65px;
      @media (max-width: 480px) {
         > div {
            max-width: 45px;
            height: 90px;
            top: 11px;
         }
      }
   }

  }

  .opponentCardsWrapper {
    /* display: flex; */
    position: relative;
    width: 150px;
    /* min-width: 120px; */
    height: 80px;
    /* position: flex; */
    /* top: 15px; */
    left: 0;

    @media (max-width: 480px) {
      top: 0;
      width: 70px;
      /* min-width: 120px; */
    }
  }

  .opponentCardsPositioner {
    /* display: flex; */
    position: relative;
    width: 100%;
    height: 100%;
    /* right: 12px; */
    /* min-width: 130px; */
    /* position: flex; */
    /* top: 15px; */
    /* left: 0; */
  }

  .showCard {
     /* position: absolute; */
     z-index: 101 !important;
     > div {
        border: 2px solid tomato;
        /* scale: 1.9; */
     }
     box-shadow: 14px 15px 15px rgba(green);
  }

  .biliCard {
      width: ${cardWidth};
      height: ${cardHeight};
      padding: ${cardPadding};

      @media (max-width: 440px) {
         padding: ${cardPadding_Mobile};
    }
  }

  .opponentCard-1 {
    position: absolute;
    top: 10px;
    left: 15px;
    transform: rotate(-20deg);
    z-index: 100;

    @media (max-width: 440px) {
      top: ${top_Mobile1};
      left: ${left_Mobile1};
    }

    .backCard-1 {
      
      
      @media (max-width: 440px) {
        width: ${cardWidth_Mobile};
        height: ${cardHeight_Mobile};
      }
    }
  }

  .opponentCard-2 {
    position: absolute;
    top: 4px;
    left: 25px;
    transform: rotate(-13deg);
    z-index: 100;

    @media (max-width: 440px) {
      top: ${top_Mobile2};
      left: ${left_Mobile2};
    }

    .backCard-2 {
      
      @media (max-width: 440px) {
        width: ${cardWidth_Mobile};
        height: ${cardHeight_Mobile};
      }
    }
  }

  .opponentCard-3 {
    position: absolute;
    top: 0;
    left: 40px;
    transform: rotate(-5deg);
    z-index: 100;

    @media (max-width: 440px) {
      top: ${top_Mobile3};
      left: ${left_Mobile3};
    }

    .backCard-3 {
      
      @media (max-width: 440px) {
        width: ${cardWidth_Mobile};
        height: ${cardHeight_Mobile};
      }
    }
  }

  .opponentCard-4 {
    position: absolute;
    top: 0;
    left: 55px;
    transform: rotate(5deg);
    z-index: 100;

    @media (max-width: 440px) {
      top: ${top_Mobile4};
      left: ${left_Mobile4};
    }

    .backCard-4 {
      
      @media (max-width: 440px) {
        width: ${cardWidth_Mobile};
        height: ${cardHeight_Mobile};
      }
    }
  }

  .opponentCard-5 {
    position: absolute;
    top: 4px;
    left: 70px;
    transform: rotate(13deg);
    z-index: 100;

    @media (max-width: 440px) {
      top: ${top_Mobile5};
      left: ${left_Mobile5};
    }

    .backCard-5 {
      
      @media (max-width: 440px) {
        width: ${cardWidth_Mobile};
        height: ${cardHeight_Mobile};
      }
    }
  }

  .opponentCard-6 {
    position: absolute;
    top: 10px;
    left: 80px;
    transform: rotate(20deg);
    z-index: 100;

    @media (max-width: 440px) {
      top: ${top_Mobile6};
      left: ${left_Mobile6};
    }

    .backCard-6 {
      
      @media (max-width: 440px) {
        width: ${cardWidth_Mobile};
        height: ${cardHeight_Mobile};
      }
    }
  }
`;
