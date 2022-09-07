import {useTranslation} from 'next-i18next';
import * as React from 'react';

import ErrorMessage from '@/components/common/error-message';
import PostLoader from '@/components/common/loaders/post-loader';
import AbcIconLoading from '@/components/icons/abc-loading';
import {useLoadMore} from '@/data/client/blogs.client';
import rangeMap from '@/utils/range-map';

import PostItem from './post-item';
import styles from './styles.module.scss';

interface IProps {
  category?: string;
}

const CategoryPosts: React.FC<IProps> = ({category}) => {
  const {t} = useTranslation('common');
  const {posts, loadMore, isLoading, hasMore, isLoadingMore, error} =
    useLoadMore(category);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className={styles['post-list']}>
      {isLoading && !posts.length
        ? rangeMap(6, i => <PostLoader key={i} uniqueKey={`post-${i}`} />)
        : posts.map((post, index) => <PostItem key={index} post={post} />)}
      {!isLoading && !posts.length && <div>{t('blog-list-empty')}</div>}

      {hasMore && (
        <div className="load-more">
          <button className="btn" onClick={loadMore} disabled={isLoadingMore}>
            {isLoadingMore && <AbcIconLoading className="mr-3 animate-spin" />}
            {t('blog-load-more')}
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPosts;
