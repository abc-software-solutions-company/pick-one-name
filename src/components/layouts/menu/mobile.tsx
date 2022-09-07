import {useRouter} from 'next/router';

import Language from '@/components/common/language';
import SocialNetwork from '@/components/common/social-network';
import MainNav from '@/components/layouts/menu/nav';

import styles from './styles.module.scss';

interface IProps {
  visible: boolean;
}

const MenuMobile: React.FC<IProps> = ({visible}) => {
  const router = useRouter();

  return (
    <div
      className={`menu-mobile fade ${visible ? 'show visible' : 'invisible'} ${
        styles['menu-mobile']
      }`}
    >
      <div className="top">
        <div className="line"></div>
        <div className="container">
          <MainNav pathname={router.pathname} />
        </div>
      </div>
      <div className="bottom">
        <SocialNetwork className="social-menu" />
        <Language className="language-menu" />
      </div>
    </div>
  );
};

export default MenuMobile;
