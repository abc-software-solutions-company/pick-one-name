import {InferGetStaticPropsType} from 'next';
import * as React from 'react';

import Seo from '@/components/common/seo/seo';
import Category from '@/components/partials/blog';
import {getStaticPaths, getStaticProps} from '@/data/ssr/category';
import LayoutDefault from '@/layouts/default';

export {getStaticPaths, getStaticProps};

export default function PageCategory({
  categories
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const categoryAttrs = categories.data[0].attributes;

  return (
    <>
      <Seo title={categoryAttrs.name} />
      <Category category={categoryAttrs.slug} />
    </>
  );
}

PageCategory.Layout = LayoutDefault;
