import { ReactImageGalleryItem } from 'react-image-gallery';

export const IMAGES: ReactImageGalleryItem[] = Array.from({ length: 30 }, (_, idx) => ({
  original: `https://geocore-v2-public.s3.ap-southeast-1.amazonaws.com/${idx + 1}.webp`,
  thumbnail: `https://geocore-v2-public.s3.ap-southeast-1.amazonaws.com/${idx + 1}.webp`,
  thumbnailClass: 'h-30 w-25 overflow-hidden',
}));
