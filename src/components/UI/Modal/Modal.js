import React from 'react'
import ReactDOM from 'react-dom'
import * as Styled from './Modal.styled.js'

const Backdrop = props => {
   return <Styled.Backdrop onClick={props.onClose} />
}

const ModalOverlay = props => {
   return <Styled.ModalContainer>
      <div>{props.children}</div>
   </Styled.ModalContainer>
}

const portalElement = document.getElementById('modal')
const portalElementPlayground = document.getElementById('playgroundModal')

const Modal = (props) => {
   return (

      ReactDOM.createPortal(<Styled.ModalContainer>
         <Styled.Backdrop onClose={props.onClose} />
         <Styled.Modal>{props.children}</Styled.Modal>
      </Styled.ModalContainer>
         , portalElement)

   )


}

export default Modal