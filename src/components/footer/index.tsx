import cls from 'classnames';
import {FC} from 'react';

import {siteSettings} from '@/configs/site.config';

import styles from './style.module.scss';

const Footer: FC = () => {
  return (
    <>
      <div className={cls(styles.footer)}>
        Created by{' '}
        <a href={siteSettings.url} target="_blank" rel="noreferrer">
          ABC Software Solutions Company
        </a>
      </div>
    </>
  );
};

export default Footer;
