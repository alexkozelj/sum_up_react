import * as Styled from './AvatarGame.styled.js';
import BiliProfilna from './../../../images/bili_profilna_crnobela.jpg'

const Avatar = (props) => {
console.log("🚀 ~ file: Avatar.js ~ line 5 ~ Avatar ~ props", props)
   return (
      <Styled.Avatar small={props.small}>
         <div className="wrapper">
            <img
               alt="opponent avatar"
               src={BiliProfilna}
               >

            </img>
         </div>
         <p>Били Питон</p>
      </Styled.Avatar>
   );
}

export default Avatar;
