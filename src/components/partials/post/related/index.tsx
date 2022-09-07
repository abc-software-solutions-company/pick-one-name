import Link from 'next/link';
import React from 'react';

import {ROUTES} from '@/configs/routes.config';
import {IPostsResponse} from '@/types';

import Item from './item';
import styles from './styles.module.scss';

interface IProps {
  post: IPostsResponse;
}

const ArticleRelated: React.FC<IProps> = ({post: data}) => {
  const post = data.data[0];
  const relatedPosts = post.attributes.relatedPosts;

  const renderItem = () => {
    return relatedPosts.data.map(({attributes}, index) => {
      const {title, categories, cover, slug} = attributes;
      return (
        <Item
          key={index}
          title={title}
          cover={cover}
          index={index}
          category={categories.data[0].attributes.name}
          slug={slug}
        />
      );
    });
  };
  return (
    <div className={styles['article-related']}>
      <div className="container">
        <div className="article-title">
          <h2>Related Articles</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {renderItem()}
          <div className="view-more">
            <Link href={ROUTES.BLOG}>
              <a className="link">
                <h2 className="text">VIEW MORE ARTICLES</h2>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleRelated;
