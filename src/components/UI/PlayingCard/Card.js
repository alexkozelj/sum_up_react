import * as Styled from "./Card.styled.js";
import J_Diamonds from './../../../images/J-diamonds-full.png'

const Card = (props) => {

   const hearts = '♥'
   const diamonds = '♦'
   const spades = '♠'
   const clubs = '♣'

   const setSymbolHandler = (symbol) => {
      if (symbol === 'hearts') return hearts
      if (symbol === 'diamonds') return diamonds
      if (symbol === 'spades') return spades
      if (symbol === 'clubs') return clubs
   }

   const cardSymbol =
      <div className={"card__symbol " + props.symbol}>
         <div>
            {setSymbolHandler(props.symbol)}
         </div>
      </div>

   return (
      <Styled.Card>
         <section className={"card card--" + props.symbol} value={props.value}>
            <div className="corner_wrapper_top">
               <div className={"corner_value_top"}>{props.value}</div>
               <div className={"corner_symbol_top"}>{setSymbolHandler(props.symbol)}</div>
            </div>

            {props.value === '2' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }


            {props.value === '3' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === '4' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === '5' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSymbol}
                  </div>
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === '6' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === '7' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSymbol}
                  </div>
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === '8' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === '9' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSymbol}
                  </div>
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === '10' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSymbol}
                     {cardSymbol}
                  </div>
                  <div className="card__column">
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === 'A' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column--img">
                     {cardSymbol}
                  </div>
               </div>
            }

            {props.value === 'J' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column--img">
                     <img src={J_Diamonds} alt={'Jack diamonds card'} />
                  </div>
               </div>
            }

            <div className="corner_wrapper_bottom">
               <div className={"corner_symbol--bottom"}>{setSymbolHandler(props.symbol)}</div>
               <div className={"corner_value--bottom"}>{props.value}</div>
            </div>
         </section>

      </Styled.Card >
   );
};

export default Card;
