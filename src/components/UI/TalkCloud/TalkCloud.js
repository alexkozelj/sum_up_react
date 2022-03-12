import * as Styled from './TalkCloud.styled.js';
import talkCloud from './../../../images/talkCloud-min.png'

const TalkCloud = (props) => {
   return (
      <Styled.TalkCloud small={props.small}>
         <div className="wrapper">
            <img
               alt="TalkCloud"
               src={talkCloud}
               >
            </img>
            <div className="opponentMessage">
               <p className={'message1'}>Пробај Лаки!</p>
            </div>
         </div>
      </Styled.TalkCloud>
   );
}

export default TalkCloud;
