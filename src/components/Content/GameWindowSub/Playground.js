import * as Styled from "./Playground.styled.js";
import Card from "./../../UI/PlayingCard/Card";

const Playground = () => {
   return (
      <Styled.Playground>
         <div className={"playgroundCardsWrapper"}>
            <div className={"cardsWrapper"}>
               <Card className={"playgroundCard"} symbol={"hearts"} value={"8"} />
               <Card className={"playgroundCard"} symbol={"spades"} value={"J"} />
               <Card className={"playgroundCard"} symbol={"hearts"} value={"8"} />
               <Card className={"playgroundCard"} symbol={"spades"} value={"J"} />
               <Card className={"playgroundCard"} symbol={"hearts"} value={"8"} />
               <Card className={"playgroundCard"} symbol={"spades"} value={"J"} />
               <Card className={"playgroundCard"} symbol={"hearts"} value={"8"} />
               <Card className={"playgroundCard"} symbol={"spades"} value={"J"} />
            </div>
         </div>

         <div className={"scoreWrapper"}>
            {/* <div className={"scoreHeader"}></div> */}
            <div className={"resultContainer"}>
               <div className={"opponentScoreContainer"}>
                  <div style={{ fontSize: "10px" }}> Bili</div>
                  <div className={"opponentScore"}>13</div>
                  <div className={"tablaWrapper"}>
                     <div className={"tabla"}>
                        ||||
                        {/* <div className={"tablaCross"}>___</div> */}
                     </div>
                  </div>
                  <div className={"cardsSumWrapper"}>
                     <div className={"sumTitle"}>zbir</div>
                     <div className={"cardsSum"}>16</div>
                  </div>
               </div>

               <div className={"playerScoreContainer"}>
                  <div style={{ fontSize: "10px" }}> Laki</div>
                  <div className={"playerScore"}>14</div>
                  <div className={"tablaWrapper"}>
                     <div className={"tabla"}>
                        ||||
                        <div className={"tablaCross"}>___</div>
                     </div>
                  </div>
                  <div className={"cardsSumWrapper"}>
                     <div className={"sumTitle"}>zbir</div>
                     <div className={"cardsSum"}>21</div>
                  </div>
               </div>
            </div>
         </div>
      </Styled.Playground>
   );
};

export default Playground;
