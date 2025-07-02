'use client';
import { IMAGES, PREVIEW_IMAGES_IDX } from '@/constants/image.constant';
import { useAppDispatch } from '@/store/hooks';
import { setGalleryStartIndex, setIsShowImagesGallery } from '@/store/reducers/app.reducer';
import { Button } from 'antd';
import Image from 'next/image';

function ImagesPreview() {
  const dispatch = useAppDispatch();

  const onImageClicked = (idx: number) => {
    dispatch(setIsShowImagesGallery(true));
    dispatch(setGalleryStartIndex(idx));
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {PREVIEW_IMAGES_IDX.map((idx) => (
        <Image
          key={IMAGES[idx].original}
          src={IMAGES[idx].original}
          alt="Image"
          width={288}
          height={0}
          className="rounded shadow-[0_-10px_20px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:transform-[translateY(-5px)] duration-400 ease-in-out"
          onClick={() => onImageClicked(idx)}
        />
      ))}
      <Button
        onClick={() => dispatch(setIsShowImagesGallery(true))}
        className="absolute bottom-0 w-full h-30 border-none rounded-none pt-12 see-more-btn hover:text-[#A4A1AD]"
      >
        See more
      </Button>
    </div>
  );
}

export default ImagesPreview;
