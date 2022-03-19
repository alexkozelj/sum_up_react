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

   const setSuitHandler = (suits) => {
      if (suits === 'hearts') return hearts
      if (suits === 'diamonds') return diamonds
      if (suits === 'spades') return spades
      if (suits === 'clubs') return clubs
   }

   const cardSuit =
      <div className={"card__suits " + props.suits}>
         <div>
            {setSuitHandler(props.suits)}
         </div>
      </div>

   return (
      <Styled.Card className={props.className}>
         <section className={"card card--" + props.suits} ranks={props.ranks}>
            <div className="corner_wrapper_top">
               <div className={"corner_ranks_top " + props.suits}>{props.ranks}</div>
               <div className={"corner_suits_top " + props.suits}>{setSuitHandler(props.suits)}</div>
            </div>

            {props.ranks === 'A' &&
               <div className="card__inner card__inner--centered">
                  <div className={'ace_card'}>
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === '2' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }


            {props.ranks === '3' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === '4' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === '5' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSuit}
                  </div>
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === '6' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === '7' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSuit}
                  </div>
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === '8' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === '9' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSuit}
                  </div>
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === '10' &&
               <div className="card__inner">
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column card__column--centered">
                     {cardSuit}
                     {cardSuit}
                  </div>
                  <div className="card__column">
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                     {cardSuit}
                  </div>
               </div>
            }

            {props.ranks === 'J' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column--img">
                     {props.suits === 'diamonds' && <img src={J_Diamonds} alt={'Jack diamonds card'} />}
                     {props.suits === 'hearts' && <img src={J_Hearts} alt={'Jack hearts card'} />}
                     {props.suits === 'clubs' && <img src={J_Clubs} alt={'Jack clubs card'} />}
                     {props.suits === 'spades' && <img src={J_Spades} alt={'Jack spades card'} />}
                  </div>
               </div>
            }

            {props.ranks === 'Q' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column--img">
                     {props.suits === 'diamonds' && <img src={Q_Diamonds} alt={'Queen diamonds card'} />}
                     {props.suits === 'hearts' && <img src={Q_Hearts} alt={'Queen hearts card'} />}
                     {props.suits === 'clubs' && <img src={Q_Clubs} alt={'Queen clubs card'} />}
                     {props.suits === 'spades' && <img src={Q_Spades} alt={'Queen spades card'} />}
                  </div>
               </div>
            }

            {props.ranks === 'K' &&
               <div className="card__inner card__inner--centered">
                  <div className="card__column--img">
                     {props.suits === 'diamonds' && <img src={K_Diamonds} alt={'King diamonds card'} />}
                     {props.suits === 'hearts' && <img src={K_Hearts} alt={'King hearts card'} />}
                     {props.suits === 'clubs' && <img src={K_Clubs} alt={'King clubs card'} />}
                     {props.suits === 'spades' && <img src={K_Spades} alt={'King spades card'} />}
                  </div>
               </div>
            }

            {!props.ranks &&
               <div className="card__inner card__inner--centered">
                  {/* <div className="card__column--img"> */}
               
                     <div className={'back'}></div>
                  {/* </div> */}
               </div>
            }

            <div className="corner_wrapper_bottom">
               <div className={"corner_suits--bottom " + props.suits}>{setSuitHandler(props.suits)}</div>
               <div className={"corner_ranks--bottom " + props.suits}>{props.ranks}</div>
            </div>
         </section>

      </Styled.Card >
   );
};

export default Card;
