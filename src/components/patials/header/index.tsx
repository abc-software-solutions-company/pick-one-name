import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';

import {linksList} from './const';
import styles from './header.module.scss';

interface IProps {
  className?: string;
}

const Header: FC<IProps> = ({className}) => {
  return (
    <div className={classnames(styles['com-header'], className)}>
      <div className="com-header--inner">
        <div className="com-header--links">
          {linksList.map(link => (
            <Link key={link.href} style={{color: '#0C0A09'}} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <Image src={'/logo.png'} width={218} height={36} alt="logo" />
        <div className="com-header--controls">
          {/* <GameSettings className="header" />
            <SoundController /> */}
          <div className="flex">
            <Button className="com-header--controls--sounds">
              <Icon name="ico-volume-1" />
            </Button>
            <Button className="com-header--controls--zoom">
              <Icon name="ico-maximize-3" />
              <span>Phóng to</span>
            </Button>
          </div>
          <div className="com-header--controls--auth">
            <Button>
              <span>Đăng nhập</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
