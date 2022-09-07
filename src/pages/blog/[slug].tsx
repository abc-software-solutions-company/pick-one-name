import {InferGetStaticPropsType} from 'next';

import Seo from '@/components/common/seo/seo';
import ArticleDetail from '@/components/partials/post/detail';
import ArticleRelated from '@/components/partials/post/related';
import {ROUTES} from '@/configs/routes.config';
import {getStaticPaths, getStaticProps} from '@/data/ssr/post.ssr';
import LayoutDefault from '@/layouts/default';

export {getStaticPaths, getStaticProps};

export default function PageBlogDetail({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const postAttrs = post?.data?.[0]?.attributes;
  const coverAttrs = postAttrs.cover.data?.attributes;
  const {url, width, height, alternativeText: alt} = coverAttrs;
  const images = [{url, width, height, alt}];
  return (
    <>
      <Seo
        title={postAttrs.title}
        description={postAttrs.description}
        images={images}
        url={`${ROUTES.BLOG}/${postAttrs.slug}`}
      />
      <ArticleDetail post={post} />
      {postAttrs.relatedPosts?.data.length > 0 && (
        <ArticleRelated post={post} />
      )}
    </>
  );
}

PageBlogDetail.Layout = LayoutDefault;
