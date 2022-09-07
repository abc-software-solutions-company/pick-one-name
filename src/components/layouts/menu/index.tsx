import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

import LogoWhite from '@/components/icons/logo-white';
import Hamburger from '@/components/layouts/menu/hamburger';
import MenuMobile from '@/components/layouts/menu/mobile';
import MainNav from '@/components/layouts/menu/nav';
import {useAppContext, useAppDispatchContext} from '@/contexts/app.context';

import styles from './styles.module.scss';

const Menu: React.FC = () => {
  const router = useRouter();
  const appContext = useAppContext();
  const dispatch = useAppDispatchContext();

  const toggleMenu = (state: boolean) => {
    dispatch({type: 'TOGGLE_MAINMENU', payload: {menuVisible: state}});
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', appContext.menuVisible);
  }, [appContext.menuVisible]);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => toggleMenu(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`menu ${styles.menu}`}>
        <div className="container">
          <div className="inner">
            <Link href="/">
              <a>
                <LogoWhite className="logo" />
              </a>
            </Link>
            <MainNav pathname={router.pathname} />
            <Hamburger
              active={appContext.menuVisible}
              onClick={() => toggleMenu(!appContext.menuVisible)}
            />
          </div>
        </div>
      </div>
      <MenuMobile visible={appContext.menuVisible} />
    </>
  );
};

export default Menu;
