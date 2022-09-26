import classnames from 'classnames';
import React, {FC} from 'react';

// import LogoABC from '../icons/logo-abc';
import styles from './header.module.scss';

interface IProps {
  className?: string;
}

const Header: FC<IProps> = ({className}) => {
  return (
    <div className={classnames(styles['com-header'], className)}>
      <div className="container">
        <div className="com-header--inner">
          {/* <a className="logo-abc" href="https://abcsoftwarecompany.com/" target="_blank" rel="noreferrer">
            <LogoABC />
          </a> */}
          <h1>LUCKY WHEEL</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
