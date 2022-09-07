import {useTranslation} from 'next-i18next';
import * as React from 'react';

import ErrorMessage from '@/components/common/error-message';
import Widget, {IDataWidget} from '@/components/common/widget/widget';
import {useGetCategories} from '@/data/client/blogs.client';

const CategoriesSidebar: React.FC = () => {
  const {t} = useTranslation('common');
  const {categories, isLoading, error} = useGetCategories();

  const widgetData: IDataWidget[] = React.useMemo(() => {
    if (categories?.data?.length) {
      return categories.data.map(category => {
        const {name, slug} = category.attributes;

        return {
          name,
          slug: `/blog/category/${slug}`
        };
      });
    }
    return [];
  }, [categories]);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Widget name={t('category-name')} data={widgetData} loading={isLoading} />
  );
};

export default CategoriesSidebar;
