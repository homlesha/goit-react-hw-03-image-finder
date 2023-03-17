import React from 'react';
import { Component } from 'react';
import { Overlay, OverlayModal, ModalImage} from './Modal.styled';

export default class Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  
    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  
    handleKeyDown = e => {
      if (e.code === 'Escape') {
  
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