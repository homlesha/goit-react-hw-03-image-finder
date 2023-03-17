import Searchbar from 'components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { toast } from 'react-toastify';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'api/api';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    searchName: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
    isVisible: false,
  };
  handleSearchFormSubmit = searchName => {
    this.setState({ searchName });
  };

  loadMoreButton = () => {
    this.setState({
      page: this.state.page + 1,
      isLoading: true,
    });
  };

  toggleModal = image => {
    this.setState(({ showModal }) => ({
      largeImage: image,
      showModal: !showModal,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevImage = prevState.searchName;
    const currentImage = this.state.searchName;
    if (prevImage !== currentImage) {
      this.setState({
        images: [],
        page: 1,
      });
    }
    if (currentImage !== prevImage || this.state.page !== prevState.page) {
      this.setState({ isLoading: true });
      const images = await fetchImages(currentImage, this.state.page);
      if (images.totalHits < 12) {
        this.setState({ isVisible: false });
      } else {
        this.setState({ isVisible: true });
      }
      if (images.hits.length === 0) {
        toast.error('Нема фото!');
      }
      console.log(images);
      this.setState(prev => ({
        images: [...prev.images, ...images.hits],
      }));
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { showModal, images, largeImage, searchName, isLoading, isVisible } =
      this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery
          images={images}
          toggleModal={this.toggleModal}
          onClickLoadMore={this.loadMoreButton}
          isLoading={isLoading}
        />
        {isVisible && <Button onClick={this.loadMoreButton} />}
        {showModal && (
          <Modal
            image={largeImage}
            onClose={this.toggleModal}
            alt={searchName}
          />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
