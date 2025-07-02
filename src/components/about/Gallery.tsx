'use client';
import { IMAGES } from '@/constants/image.constant';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  getGalleryStartIndex,
  getIsShowImagesGallery,
  setGalleryStartIndex,
  setIsShowImagesGallery,
} from '@/store/reducers/app.reducer';
import { Modal } from 'antd';
import ImageGallery from 'react-image-gallery';

function Gallery() {
  const dispatch = useAppDispatch();
  const isShowImagesGallery = useAppSelector(getIsShowImagesGallery);
  const galleryStartIndex = useAppSelector(getGalleryStartIndex);

  const onCancel = () => {
    dispatch(setIsShowImagesGallery(false));
    dispatch(setGalleryStartIndex(0));
  };

  return (
    <Modal open={isShowImagesGallery} width={700} onCancel={onCancel} footer={false} centered>
      <ImageGallery
        items={IMAGES}
        showPlayButton={false}
        showFullscreenButton={false}
        startIndex={galleryStartIndex}
      />
    </Modal>
  );
}

export default Gallery;
