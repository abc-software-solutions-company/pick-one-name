import Seo from '@/components/common/seo/seo';
import Category from '@/components/partials/blog';
import {ROUTES} from '@/configs/routes.config';
import {getStaticProps} from '@/data/ssr/blogs.ssr';
import LayoutDefault from '@/layouts/default';

export {getStaticProps};

export default function PageBlog() {
  return (
    <>
      <Seo title="Blog" url={ROUTES.BLOG} />
      <Category />
    </>
  );
}

PageBlog.Layout = LayoutDefault;
