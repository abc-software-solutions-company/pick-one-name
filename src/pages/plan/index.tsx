import LayoutDefault from '@/layouts/default';

import Plan from '@/components/plan';

export default function PagePlan() {
  return (
    <div className={'my-8 h-full flex-col p-5 xl:mx-auto xl:w-[1153px] xl:p-0 3xl:my-18'}>
      <Plan />
    </div>
  );
}

PagePlan.Layout = LayoutDefault;
