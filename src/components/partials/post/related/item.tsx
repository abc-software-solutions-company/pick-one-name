import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {ROUTES} from '@/configs/routes.config';
import {useGetImageSrc} from '@/hooks/useGetImageSrc';
import {IImage} from '@/types';

interface IProps {
  title: string;
  category: string;
  index: number;
  cover: IImage;
  slug: string;
}

const ArticleRelatedItem: React.FC<IProps> = ({
  title,
  category,
  cover,
  index,
  slug
}) => {
  const {url} = useGetImageSrc(cover);

  return (
    <Link href={`${ROUTES.BLOG}/${slug}`}>
      <div
        className={`article-item img-hover-scale overlay article-item-${
          index + 1
        }`}
      >
        <Image
          src={url}
          alt={cover.data.attributes.alternativeText}
          blurDataURL={cover.data.attributes.placeholder}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
        <div className="info">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ArticleRelatedItem;
