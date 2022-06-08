import * as Styled from './TalkCloud.styled.js';
import talkCloud from './../../../images/talkCloud-min.png'

const TalkCloud = (props) => {
   return (
      <Styled.TalkCloud small={props.small}>
         {/* <div className="container"> */}
            {/* <div className="wrapper"> */}

               <div className="cloudWrapper">
                  <img
                     alt="TalkCloud"
                     src={talkCloud}
                  >
                  </img>
                  <div className={'message1'}>Пробај  dsfЛаки! </div>
               </div>
               
            {/* </div> */}
         {/* </div> */}
      </Styled.TalkCloud>
   );
}

export default TalkCloud;
