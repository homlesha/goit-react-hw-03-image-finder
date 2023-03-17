import React from 'react';
import PropTypes from 'prop-types';
import { ImageItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({webformatURL, tags, largeImageURL, toggleModal }) => {
  return (
    <ImageItem>
      <Image src={webformatURL} alt={tags}  onClick={() => toggleModal(largeImageURL)}/>
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
