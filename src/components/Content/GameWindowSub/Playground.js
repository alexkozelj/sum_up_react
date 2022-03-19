import * as Styled from "./Playground.styled.js";
import Card from "./../../UI/PlayingCard/Card";

const Playground = () => {
   return (
      <Styled.Playground>
         <div className={"playgroundCardsWrapper"}>
            <div className={"cardsWrapper"}>
               <Card className={"playgroundCard"} suits={"hearts"} ranks={"9"} />
               <Card className={"playgroundCard"} suits={"hearts"} ranks={"J"} />
               <Card className={"playgroundCard"} suits={"clubs"} ranks={"K"} />
               <Card className={"playgroundCard"} suits={"diamonds"} ranks={"Q"} />
               <Card className={"playgroundCard"} suits={"hearts"} ranks={"8"} />
               <Card className={"playgroundCard"} suits={"clubs"} ranks={"A"} />
               <Card className={"playgroundCard"} suits={"hearts"} ranks={"10"} />
            </div>
         </div>

         <div className={"scoreboardContainer"}>
            {/* <div className={"scoreHeader"}></div> */}
            <div className={"gameInfoContainer"}>
               <header className={"gameInfoHeader"}>Инфо</header>
               <div className={"gameInfo"}>Igra: 1</div>
               <div className={"dealInfo"}>Deljenje: 2</div>
            </div>
            <div className={"resultContainer"}>
               <header className={"resultHeader"}>Резултат</header>

               <div className={"resultWrapper"}>
                  <div className={"opponentScoreContainer"}>
                     <div className={"opponentName"}>Били</div>
                     <div className={"opponentScore"}>13</div>
                     <div className={"tablaWrapper"}>
                        <div className={"tabla"}>
                           ||||
                           ||||
                           ||||
                           ||||
                           {/* <div className={"tablaCross"}>___</div> */}
                        </div>
                     </div>
                     <div className={"cardsSumWrapper"}>
                        <div className={"sumTitle"}>karte</div>
                        <div className={"cardsSum"}>16</div>
                     </div>
                  </div>

                  <div className={"playerScoreContainer"}>
                     <div className={"playerName"}> Лаки</div>
                     <div className={"playerScore"}>14</div>
                     <div className={"tablaWrapper"}>
                        <div className={"tabla"}>
                           ||||
                           <div className={"tablaCross"}>___</div>
                        </div>
                     </div>
                     <div className={"cardsSumWrapper"}>
                        <div className={"sumTitle"}>karte</div>
                        <div className={"cardsSum"}>21</div>
                     </div>
                  </div>

               </div>

               <div className={"overallResultWrapper"}>
                  <div className={"overallResult"}>Укупан резултат</div>
               </div>
               <div className={"totalResultWrapper"}>
                  <div className={"totalResultOpponent"}>33</div>
                  <div className={"totalResultPlayer"}>44</div>
               </div>
            </div>
         </div>
      </Styled.Playground>
   );
};

export default Playground;
