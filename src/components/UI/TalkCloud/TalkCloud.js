import React from 'react';
import * as Styled from './TalkCloud.styled.js';
import talkCloud from './../../../images/talkCloud-min.png'
import { StoreContext } from './../../../store/store'
import { useObserver } from 'mobx-react'

const TalkCloud = (props) => {
   const store = React.useContext(StoreContext)

   return (
      <Styled.TalkCloud info={store.billyMessage}>
         {/* <div className="container"> */}
         {/* <div className="wrapper"> */}

         <div className="cloudWrapper">
            <img
               alt="TalkCloud"
               src={talkCloud}
            >
            </img>
            
            {
               useObserver(() =>
               <div className={'message1'} >{store.billyMessage.message}</div>
                  
               )
            }
         </div>

         {/* </div> */}
         {/* </div> */}
      </Styled.TalkCloud>
   );
}

export default TalkCloud;
