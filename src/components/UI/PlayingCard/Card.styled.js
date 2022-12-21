import styled from "styled-components";
// import { fluidCalc, fluidTypo } from "./../../Helpers/FluidTypo";

const fontSize = "1em";
const cardBackground = "#fff";

export const Card = styled.div`
  display: flex;
  width: 70px;
  height: 125px;
  padding: 8px 8px 6px 7px;
  margin: 5px;
  border-radius: 0.6em;
  border: 2.5px solid transparent;
  background-color: ${cardBackground};
  box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.38);
  font: ${fontSize} "Trebuchet MS";
  cursor: pointer;


  @media (max-width: 480px) {
    width: 47px;
    /* height: 100%; */
    max-height: 86px;
    padding: 0.4em;
    margin: 1vw;
    border-radius: 0.5em;
  }

  .card {
    width: 100%;
    border: 0;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 480px) {
      height: 100%;
    }

    .ace_card {
      font-size: 30px;

      @media (max-width: 480px) {
         font-size: 18px;
    }
    }

    .corner_wrapper_top {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      font-size: 0.5em;

      
      @media (max-width: 480px) {
        height: min-content;
        /* font-size: 1em; */

      }

      > div {
        align-self: flex-start;
      }

      .corner_ranks_top {
         font-size: 14px;
         /* line-height: 17px; */
         margin-bottom: 1px;
      }

      .corner_suits_top {
         font-size: 8px;
         /* line-height: 7px; */
         width: 100%;
      }

      @media (max-width: 480px) {
         .corner_ranks_top {
            font-size: 1.55em;
            line-height: 0.8em;
         }

         .corner_suits_top {
            font-size: 0.5em;
            line-height: 15px;

         }
        
      }

      /* .corner_value_top {
        line-height: 12px;

        @media (max-width: 480px) {
          line-height: 10px;
        }
      } */

    }

    .corner_wrapper_bottom {
      font-size: 0.4em;
      line-height: 1em;
      align-self: flex-end;

      > div {
        transform: rotate(180deg);
      }

      .corner_value--bottom {
        line-height: 12px;
      }

      @media (max-width: 480px) {
        height: 0;
        display: none;
      }
    }
  }

  .card__inner {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: 1px;


    @media (max-width: 480px) {
    }

  }

  .card__column {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 90%;
    justify-content: space-around;
    align-items: center;
    margin: 0 3px;
    font-family: auto;

    @media (max-width: 480px) {
      width: 30%;
      justify-content: space-around;
      margin: 0 1px;
    }

    .card__suits {
      font-size: 14px;
      line-height: 7px;
      text-align: center;

      @media (max-width: 480px) {
        font-size: 7px;
        line-height: 8px;
      }
    }
  }

  .card__column--centered {
   
      margin: 0 !important;
      
    
  }

  .card__column--img {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
   font-size: 2em;
   font-family: cursive;

    @media (max-width: 480px) {
      top: 8px;
      font-size: 1.75em;
    }

    img {
      
      align-self: center;
      max-width: 78%;
      height: auto;
      padding: 2px;
      @media (max-width: 480px) {
        max-width: 68%;
        padding: 0;
        margin-left: 8px;
      }
    }
  }

  .backCardDiv.showBack {
     position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid orange;
    border-radius: 3px;
    /* background-color: orange; */
    ~ div {
       display: none;
    }
    background-image: conic-gradient(
      #246104 25%,
      #626304 25%,
      #cdf719 50%,
      #000000 50%,
      #066533 75%,
      #edc60f 75%
    );
    opacity: 0.8;
    background-size: 7px 7px;
    transform: rotateY(-180deg);

    @media (max-width: 480px) {
      background-size: 5px 5px;
    }
  }

  
  .red {
     color: red;
  }
  .black {
     color: black;
  }


  .hearts,
  .diamonds {
    color: red;
  }
  .spades,
  .clubs {
    color: black;
  }
`;
