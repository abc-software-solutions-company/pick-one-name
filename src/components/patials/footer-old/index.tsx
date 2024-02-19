import {FC} from 'react';
import cls from 'classnames';
import {siteSettings} from '@/configs/site.config';

import styles from './style.module.scss';

const FooterOld: FC = () => {
  return (
    <>
      <div className={cls(styles.footer)}>
        Created by{' '}
        <a href={siteSettings.author.websiteUrl} target="_blank" rel="noreferrer">
          {siteSettings.author.name}
        </a>
      </div>
    </>
  );
};

export default FooterOld;
