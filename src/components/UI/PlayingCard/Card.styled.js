import styled, { css } from 'styled-components';
import { fluidCalc, fluidTypo } from './../../Helpers/FluidTypo'

// const color = '#c0c0c0';
const background = '#f0f0f0';
const gutter = '5px';
const fontSize = '0.8em';

const cardBackground = '#fff';
const cardPadding = '5px';
const borderRadius = '0.5em';
const cardWidth = '100%';
const cardHeight = 'auto';
const cardColorRed = '#e44145';
const cardColorBlack = '#252525';
const cardSymbolSize = '1em';

const hearts = ' ♥';
const spade = ' ♠';


export const Card = styled.div`

   display: flex;
   width: 80px;
   height: 120px;
   padding: 0.5em;
	margin: 5px;
	border-radius: 0.6em;
   /* border: 1px solid black; */
	background-color: ${cardBackground};
	box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.38);
   font: ${fontSize} 'Trebuchet MS';
   
   /* flex: 1; */
   /* flex-direction: rows; */
   /* display: inline-block; */
   
   
   @media (max-width: 480px) {
         
      width: 44px;
      height: 75px;
      padding: 0.4em;
      margin: 1vw;
      border-radius: 0.5em;
         
   }
	
   .card {
      /* position: relative; */
      /* display: inline-block; */
      /* flex-direction: column; */
      width: 100%;
      border: 0;
      justify-content: flex-start;
      align-items: center;
      
      
      @media (max-width: 480px) {
            
         height: 100%;
         /* width: 36px; */
         /* height: 80px; */
            
      }
      



   .corner_wrapper_top {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      font-size: 1.2em;
      
      /* color: red; */

      > div {
         align-self: flex-start;
      }

      .corner_value_top {
         /* background-color: pink; */
         line-height: 12px;

         @media (max-width: 480px) {
            
            line-height: 10px;

         }
      }      

      @media (max-width: 480px) {
            
         height: min-content;
         /* height: 20px; */
         font-size: 1em;
            
      }
      
   }

   .corner_wrapper_bottom {
      
      /* font-size: {props => {
         return fluidCalc(14, 40, 480, 1440)
      }}; */
      font-size: 1.2em;
      align-self: flex-end;
      /* color: red; */
      
         > div {
            transform: rotate(180deg)
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
	/* position: absolute; */
	display: flex;
   width: 100%;
   height: 100%;
   /* width: 100%; */
	justify-content: center;
   align-items: center;
   overflow: hidden;
	
	
   @media (max-width: 480px) {
         
         /* max-height: 80px; */
            
      }
      
   &--centered {
		/* justify-content: center; */
	}

}

.card__column {
	display: flex;
	flex-direction: column;
   width: 20%;
   height: 90%;
	justify-content: space-around;
   align-items: center;
	
   
   @media (max-width: 480px) {
         
      width: 30%;
      justify-content: space-around;
      /* max-height: 80px; */
         
   }
      
	&--centered {
		/* justify-content: center; */
	}

   
.card__symbol {
	/* display: inline-block; */
   /* margin: 5px; */
	/* height:  */
   /* width: ; */
   font-size: 13px;
   line-height: 12px;
	text-align: center;

   @media (max-width: 480px) {
         
      font-size: 10px;
      line-height: 8px;
      /* max-height: 80px; */
         
   }
         
		
   > div {
      /* width: 10% */
   }
	
}



}

.card__column--img {
   display: flex;
   position: absolute;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   
   
   /* overflow: visible; */
   
   
   @media (max-width: 480px) {
      top: 8px;
      /* max-height: 80px; */
         
   }
      
   img {
      /* height: auto; */
      align-self: center;
      max-width: 78%;
      height: auto;
      /* overflow: visible !important; */
      /* max-width: 100%;
      max-height: 100%; */
      padding: 2px;
      /* object-fit: cover; */
      @media (max-width: 480px) {
         max-width: 68%;
         padding: 0;
         margin-left: 8px;
         /* max-height: 100%; */
            
      }
         
   }
}


.back {
   width: 100%;
   height: 100%;
   border: 1px solid orange;
   border-radius: 3px;
   background-image: conic-gradient( 
      #246104 25%, 
      #626304 25%,
      #cdf719 50%,
      #000000 50%,
      #066533 75%,
      #edc60f 75%
      );
   opacity: 0.8;
   background-size: 10px 10px;
   transform: rotateY(-180deg);

   @media (max-width: 480px) {
      background-size: 7px 7px;
            
      }
}

/*  */

.hearts,
.diamonds {
   color: red;
}
.spades,
.clubs {
   color: black;
}


`
