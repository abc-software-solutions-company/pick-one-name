import {IImage} from '@/types';
import {getImageURL} from '@/utils/misc';

import useMediaQuery from './useMediaQuery';

interface IUseGetImageSrcReturn {
  url: string;
  width: number;
  height: number | 'auto';
}

export function useGetImageSrc(image: IImage): IUseGetImageSrcReturn {
  const large = useMediaQuery('(max-width: 1000px)');
  const medium = useMediaQuery('(max-width: 750px)');
  const small = useMediaQuery('(max-width: 500px)');
  const thumbnail = useMediaQuery('(max-width: 245px)');

  const imageAttrs = image?.data?.attributes;

  if (!imageAttrs) return {url: '', width: 0, height: 'auto'};

  const formats = imageAttrs.formats;

  const largeFormat = formats?.large;
  const mediumFormat = formats?.medium;
  const smallFormat = formats?.small;
  const thumbnailFormat = formats?.thumbnail;

  if (large && largeFormat?.url) {
    return {
      url: getImageURL(largeFormat.url),
      width: largeFormat.width || 1000,
      height: largeFormat.height || 'auto'
    };
  }

  if (medium && mediumFormat?.url) {
    return {
      url: getImageURL(mediumFormat.url),
      width: mediumFormat.width || 1000,
      height: mediumFormat.height || 'auto'
    };
  }

  if (small && smallFormat?.url) {
    return {
      url: getImageURL(smallFormat.url),
      width: smallFormat.width || 1000,
      height: smallFormat.height || 'auto'
    };
  }

  if (thumbnail && thumbnailFormat?.url) {
    return {
      url: getImageURL(thumbnailFormat.url),
      width: thumbnailFormat.width || 1000,
      height: thumbnailFormat.height || 'auto'
    };
  }

  return {
    url: getImageURL(imageAttrs.url ?? ''),
    width: imageAttrs.width,
    height: imageAttrs.height
  };
}
