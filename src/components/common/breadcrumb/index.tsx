import Link from 'next/link';
import React from 'react';

import {ICategory} from '@/types';

import styles from './styles.module.scss';

interface IProps {
  data: ICategory[];
}

const Breadcrumb: React.FC<IProps> = ({data}) => {
  const renderPath = () => {
    if (!data) return null;

    return data.map((x: ICategory, idx) => {
      return (
        <div key={idx}>
          <span>{`//`}</span>
          <Link href={x.slug}>
            <a>{x.name}</a>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={`breadcrumb ${styles.breadcrumb}`}>
      <>
        <Link href="/">
          <a>Home</a>
        </Link>
        {renderPath()}
      </>
    </div>
  );
};

export default Breadcrumb;
