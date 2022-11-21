
import createDeck from './createDeck'
import shuffleDeck from './shuffleDeck'
import dealCards from './dealCards'


export const nextGameSetup = (store) => {
   
   store.isShuffled = false;
   store.isDealt = false;
   

   let newlyCreatedDeck = createDeck(store)
   // console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ newlyCreatedDeck", newlyCreatedDeck)
   
   const shuffledDeck =  shuffleDeck(newlyCreatedDeck)
   // console.log("🚀 ~ file: App.js ~ line 25 ~ App ~ shuffledDeck", shuffledDeck)
   
   shuffledDeck.map(arr => store.addToArray(store.fullDeck, arr[0]))
   store.isShuffled = true
   
   dealCards(store)
   store.isDealt = true;
}

export default nextGameSetup
