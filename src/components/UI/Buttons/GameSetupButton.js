import React, { useState } from 'react';
import * as Styled from './GameSetupButton.styled.js';
import { StoreContext } from './../../../store/store'
import { useObserver } from 'mobx-react'

const GameSetupButton = (props) => {
   const store = React.useContext(StoreContext)
   // const [selected, setSelected] = useState(props.children === store.gamesToPlay || props.type === store.gameType)
   // let selected = props.children === store.gamesToPlay || props.type === store.gameType
   // // console.log("🚀 ~ file: gameSetupButton.js ~ line 8 ~ GameSetupButton ~ store.gamesToPlay + ''", store.gamesToPlay + '')

   // const gameSetupHandler = (e) => {
   //    if (props.gameType) {
   //       return store.gameType = props.gameType
   //    }
   //    // console.log("🚀 ~ file: gameSetupButton.js ~ line 15 ~ gameSetupHandler ~ typrof(+props.children)", typeof (+props.children))
   //    if (typeof (+props.children) === 'number' && props.type === 'numberOfGames') {
   //       store.gamesToPlay = props.children
   //       console.log('IT IS A NUMBER !!@@', e)
   //    }
   //    console.log("🚀 ~ file: gameSetupButton.js ~ line 18 ~ gameSetupHandler ~ store.gamesToPlay", store.gamesToPlay)
   //    console.log("🚀 ~ file: gameSetupButton.js ~ line 14 ~ gameSetupHandler ~ store.gameType", store.gameType)
   // }

   return (
      // useObserver(() =>
         <Styled.GameSetupButton onClick={props.onClick} id={props.id} selected={props.selected} type={props.type} >
            {props.children}
         </Styled.GameSetupButton>
      // )

   );
}

export default GameSetupButton;
