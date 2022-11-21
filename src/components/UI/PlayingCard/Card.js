import * as Styled from "./Card.styled.js";


const Card = (props) => {

   const hearts = '♥'
   const diamonds = '♦'
   const spades = '♠'
   const clubs = '♣'
   const king = '♚'
   const queen = '♛'
   const jack = '⚜'

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

   // const cardClickHandler = () => {
   //    console.log('this is from cardClickHandler')
   //    props.cardClickHandler()
   // }
   // console.log('id from card', props.id)

   // {props.backCard &&
   //    <div className="card__inner card__inner--centered">
   //       {/* <div className="card__column--img"> */}

   //       <div className={'back'}></div>
   //       {/* </div> */}
   //    </div>
   // }

   return (
      <Styled.Card className={props.className} id={props.id} onClick={props.onClick}>

         <section className={"card card--" + props.suits} ranks={props.ranks}>
            
            {/* backCardDiv */}
            <div id={`backCardDiv-${props.id}`} className={props.classNameSection}></div>

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
                     {props.suits === 'diamonds' && <span className={'red'}>{jack}</span>}
                     {props.suits === 'hearts' && <span className={'red'}>{jack}</span>}
                     {props.suits === 'clubs' && <span className={'black'}>{jack}</span>}
                     {props.suits === 'spades' && <span className={'black'}>{jack}</span>}
                  </div>
               </div>
            }

            {props.ranks === 'Q' &&
               <div className="card__inner card__inner--centered">
               <div className="card__column--img">
                     {props.suits === 'diamonds' && <span className={'red'}>{queen}</span>}
                     {props.suits === 'hearts' && <span className={'red'}>{queen}</span>}
                     {props.suits === 'clubs' && <span className={'black'}>{queen}</span>}
                     {props.suits === 'spades' && <span className={'black'}>{queen}</span>}
                  </div>
               </div>
            }

            {props.ranks === 'K' &&
               <div className="card__inner card__inner--centered">
               <div className="card__column--img">
                     {props.suits === 'diamonds' && <span className={'red'}>{king}</span>}
                     {props.suits === 'hearts' && <span className={'red'}>{king}</span>}
                     {props.suits === 'clubs' && <span className={'black'}>{king}</span>}
                     {props.suits === 'spades' && <span className={'black'}>{king}</span>}
                  </div>
               </div>
            }

            {!props.backCard &&
               <div className="corner_wrapper_bottom">
                  <div className={"corner_suits--bottom " + props.suits}>{setSuitHandler(props.suits)}</div>
                  <div className={"corner_ranks--bottom " + props.suits}>{props.ranks}</div>
               </div>
            }



         </section>

      </Styled.Card >
   );
};

export default Card;
