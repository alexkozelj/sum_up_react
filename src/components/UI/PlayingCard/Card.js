import * as Styled from "./Card.styled.js";
import J_Diamonds from './../../../images/Cards/J-diamonds-min.png'
import J_Hearts from './../../../images/Cards/J-hearts-min.png'
import J_Clubs from './../../../images/Cards/J-clubs-min.png'
import J_Spades from './../../../images/Cards/J-spades-min.png'
import Q_Diamonds from './../../../images/Cards/Q-diamonds-min.png'
import Q_Hearts from './../../../images/Cards/Q-hearts-min.png'
import Q_Clubs from './../../../images/Cards/Q-clubs-min.png'
import Q_Spades from './../../../images/Cards/Q-spades-min.png'
import K_Diamonds from './../../../images/Cards/K-diamonds-min.png'
import K_Hearts from './../../../images/Cards/K-hearts-min.png'
import K_Clubs from './../../../images/Cards/K-clubs-min.png'
import K_Spades from './../../../images/Cards/Q-spades-min.png'

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
      <Styled.Card className={props.className}>
         <section className={"card card--" + props.symbol} value={props.value}>
            <div className="corner_wrapper_top">
               <div className={"corner_value_top " + props.symbol}>{props.value}</div>
               <div className={"corner_symbol_top " + props.symbol}>{setSymbolHandler(props.symbol)}</div>
            </div>

            {props.value === 'A' &&
               <div className="card__inner card__inner--centered">
                  <div className={'ace_card'}>
                     {cardSymbol}
                  </div>
               </div>
            }

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

            {props.value === 'J' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column--img">
                     {props.symbol === 'diamonds' && <img src={J_Diamonds} alt={'Jack diamonds card'} />}
                     {props.symbol === 'hearts' && <img src={J_Hearts} alt={'Jack hearts card'} />}
                     {props.symbol === 'clubs' && <img src={J_Clubs} alt={'Jack clubs card'} />}
                     {props.symbol === 'spades' && <img src={J_Spades} alt={'Jack spades card'} />}
                  </div>
               </div>
            }

            {props.value === 'Q' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column--img">
                     {props.symbol === 'diamonds' && <img src={Q_Diamonds} alt={'Queen diamonds card'} />}
                     {props.symbol === 'hearts' && <img src={Q_Hearts} alt={'Queen hearts card'} />}
                     {props.symbol === 'clubs' && <img src={Q_Clubs} alt={'Queen clubs card'} />}
                     {props.symbol === 'spades' && <img src={Q_Spades} alt={'Queen spades card'} />}
                  </div>
               </div>
            }

            {props.value === 'K' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column--img">
                     {props.symbol === 'diamonds' && <img src={K_Diamonds} alt={'King diamonds card'} />}
                     {props.symbol === 'hearts' && <img src={K_Hearts} alt={'King hearts card'} />}
                     {props.symbol === 'clubs' && <img src={K_Clubs} alt={'King clubs card'} />}
                     {props.symbol === 'spades' && <img src={K_Spades} alt={'King spades card'} />}
                  </div>
               </div>
            }

            {!props.value &&
               <div className="card__inner card__inner--centered">
                  {/* <div className="card__column--img"> */}
               
                     <div className={'back'}></div>
                  {/* </div> */}
               </div>
            }

            <div className="corner_wrapper_bottom">
               <div className={"corner_symbol--bottom " + props.symbol}>{setSymbolHandler(props.symbol)}</div>
               <div className={"corner_value--bottom " + props.symbol}>{props.value}</div>
            </div>
         </section>

      </Styled.Card >
   );
};

export default Card;
