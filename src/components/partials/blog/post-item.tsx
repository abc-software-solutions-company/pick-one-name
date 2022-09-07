import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import * as React from 'react';

import {ROUTES} from '@/configs/routes.config';
import {useGetImageSrc} from '@/hooks/useGetImageSrc';
import {IData, IPostAttributes} from '@/types';
import {formatDate} from '@/utils/date-format';

interface IProps {
  post: IData<IPostAttributes>;
}

const CategoryItem: React.FC<IProps> = ({post}) => {
  const {t} = useTranslation('common');
  const {locale} = useRouter();
  const {slug, cover, title, description, publishedAt} = post.attributes;
  const imageAttrs = cover.data?.attributes;
  const {url, width, height} = useGetImageSrc(cover);

  return (
    <div className="post-item">
      <div className="row">
        <div className="image img-hover-scale">
          {imageAttrs && (
            <>
              <Image
                src={url ?? ''}
                width={width}
                height={height}
                alt={imageAttrs.alternativeText}
                blurDataURL={imageAttrs.placeholder}
                placeholder="blur"
                objectFit="cover"
              />
              <Link href={`${ROUTES.BLOG}/${slug}`}>
                <a></a>
              </Link>
            </>
          )}
        </div>
        <div className="content">
          <h3 className="title">
            <Link href={`${ROUTES.BLOG}/${slug}`}>
              <a className="link">{title}</a>
            </Link>
          </h3>
          <span className="date">{formatDate(publishedAt, locale)}</span>
          <p>{description}</p>
          <Link href={`${ROUTES.BLOG}/${slug}`}>
            <a className="read-more">{t('blog-view-detail')}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
