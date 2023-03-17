import React from 'react';
import { Component } from 'react';
import { Overlay, OverlayModal, ModalImage} from './Modal.styled';

export default class Modal extends Component {
    componentDidMount() {
      console.log('Modal componentDidMount');
      window.addEventListener('keydown', this.handleKeyDown);
    }
  
    componentWillUnmount() {
      console.log('Modal componentWillUnmount');
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  
    handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
  
        this.props.onClose();
      }
    };
  
    handleBackdropClick = event => {
  
      if (event.currentTarget === event.target) {
        this.props.onClose();
      }
    };
  
    render() {
      return (
        <Overlay onClick={this.handleBackdropClick}>
          <OverlayModal>
          <ModalImage src={this.props.image} alt={this.props.imageName}/>
          </OverlayModal>
        </Overlay>
      );
    }
  }