import RandomNumber from '@/components/random-number';
import LayoutDefault from '@/layouts/default';

import styles from './number.module.scss';

export default function PageNumber() {
  return (
    <div className={styles['page-number']}>
      <RandomNumber />
    </div>
  );
}

PageNumber.Layout = LayoutDefault;
