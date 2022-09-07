import Link from 'next/link';
import {useTranslation} from 'next-i18next';

import {ROUTES} from '@/configs/routes.config';

interface IMenuItem {
  name: string;
  url: string;
}

interface IProps {
  pathname: string;
}

const Nav: React.FC<IProps> = ({pathname}) => {
  const {t} = useTranslation('common');

  const menuItems: IMenuItem[] = [
    {name: t('menu-home'), url: ROUTES.HOME},
    {name: t('menu-blog'), url: ROUTES.BLOG},
    {name: t('menu-contact-us'), url: ROUTES.CONTACT}
  ];

  return (
    <>
      <nav>
        <ul>
          {menuItems.map((x: IMenuItem, index) => {
            return (
              <li
                key={index}
                className={pathname.includes(x.url) ? 'active' : ''}
              >
                <Link href={x.url}>
                  <a>
                    <span>{x.name}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
