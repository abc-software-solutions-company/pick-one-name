import LayoutDefault from '@/layouts/default';

import InforUser from '@/components/infor-user';

export default function PageInformation() {
  return (
    <div className={'h-full w-full grow flex-col px-[20px] md:px-[20px] xl:px-[100px]'}>
      <InforUser />
    </div>
  );
}

PageInformation.Layout = LayoutDefault;
