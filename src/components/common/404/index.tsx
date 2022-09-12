import Image from 'next/image';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import * as React from 'react';

import noResult from '@/assets/no-result.svg';
import {ROUTES} from '@/configs/routes.config';

const ErrorInformation: React.FC = () => {
  const {t} = useTranslation('common');

  return (
    <div className="grid min-h-screen place-items-center p-4 sm:p-8">
      <div className="text-center">
        <p className="text-body-dark mb-4 text-sm uppercase tracking-widest sm:mb-5">{t('404-heading')}</p>
        <h1 className="text-bolder mb-5 text-2xl font-bold leading-normal sm:text-3xl">{t('404-sub-heading')}</h1>
        <div className="mb-11">
          <Image src={noResult} alt={t('404-heading')} />
        </div>
        <Link
          href={ROUTES.HOME}
          className="text-bolder hover:text-body-dark inline-flex items-center underline hover:no-underline focus:outline-none sm:text-base"
        >
          {t('404-back-home')}
        </Link>
      </div>
    </div>
  );
};

export default ErrorInformation;
