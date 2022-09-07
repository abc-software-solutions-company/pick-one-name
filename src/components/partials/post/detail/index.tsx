import {useRouter} from 'next/router';
import React from 'react';

import Author from '@/components/common/author';
import Breadcrumb from '@/components/common/breadcrumb';
import {IPostsResponse} from '@/types';
import {formatDate} from '@/utils/date-format';

import PostContent from './content';
import styles from './styles.module.scss';

interface IProps {
  post: IPostsResponse;
}

const ArticleDetail: React.FC<IProps> = ({post: data}) => {
  const {locale} = useRouter();

  const post = data.data[0];
  const postAttrs = post.attributes;
  const authorAttrs = postAttrs.author.data?.attributes;
  const categories = postAttrs.categories;
  const categoryAttrs = categories.data?.[0]?.attributes;

  return (
    <div className={`${styles['article-detail']}`}>
      <div className="container">
        {!!categoryAttrs && (
          <Breadcrumb
            data={[
              {
                name: 'Blog',
                slug: '/blog'
              },
              {
                name: categoryAttrs.name,
                slug: `/blog/category/${categoryAttrs.slug}`
              }
            ]}
          />
        )}
        <h1 className="title">{postAttrs.title}</h1>
        {authorAttrs?.avatar && <Author data={authorAttrs} />}
        <p className="date">{formatDate(postAttrs.publishedAt, locale)}</p>
        <PostContent content={postAttrs.body} cover={postAttrs.cover} />
        {/* <PostShare /> */}
      </div>
    </div>
  );
};
export default ArticleDetail;
