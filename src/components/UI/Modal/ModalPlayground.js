import React from 'react'
import * as Styled from './ModalPlayground.styled.js'


const Modal = (props) => {
   return (
      <Styled.ModalContainer>
         <Styled.Backdrop onClose={props.onClose} />
         <Styled.Modal>{props.children}</Styled.Modal>
      </Styled.ModalContainer>
   )


}

export default Modal