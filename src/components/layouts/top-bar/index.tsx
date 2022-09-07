import * as React from 'react';

import Language from '@/components/common/language';
import SocialNetwork from '@/components/common/social-network';

import styles from './styles.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={`topbar ${styles.topbar}`}>
      <div className="container">
        <div className="inner">
          <SocialNetwork className="social-topbar" />
          <Language className="language-topbar" />
        </div>
      </div>
    </div>
  );
};
export default TopBar;
