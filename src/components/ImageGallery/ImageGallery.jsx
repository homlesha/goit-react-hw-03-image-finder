import Loader from 'components/Loader/Loader';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery,styled';
import PropTypes from 'prop-types'

const ImageGallery = ({ images, toggleModal, isLoading  }) => {
  return (
    <>
      <ImageList>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            largeImageURL={image.largeImageURL}
            toggleModal={toggleModal}
          />
        ))}
      </ImageList>
      {isLoading &&  <Loader/>}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ImageGallery;
