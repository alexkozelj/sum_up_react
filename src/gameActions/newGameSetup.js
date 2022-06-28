

export const newGameSetup = (store) => {
   
   // store.startWindow= true

   store.fullDeck= []

   store.isShuffled= false

   store.isDealt= false

   // store.gameType= 'games'
   // store.gamesToPlay= '1'


   store.gameNumber= 1
   store.dealNumber= 1

   store.gameResultComputer= 0
   store.gameResultPlayer= 0

   store.overallResultComputer= 0
   store.overallResultPlayer= 0

   store.tablaPointComputer= []
   store.tablaPointPlayer= []
   

   store.compCollectedCards= []
   store.playerCollectedCards= []

   store.compInHandCards= []
   store.playerInHandCards= []

   store.cardsOnTable= []

   store.cardsToDeal= []

   store.cardsInCalculation= []

   // Player who takes last combination in game, takes rest of cards
   store.whoTookLast= ''
   
}

export default newGameSetup
