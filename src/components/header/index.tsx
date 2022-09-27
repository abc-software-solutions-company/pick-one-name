import classnames from 'classnames';
import React, {FC} from 'react';

import styles from './header.module.scss';

interface IProps {
  className?: string;
}

const Header: FC<IProps> = ({className}) => {
  return (
    <div className={classnames(styles['com-header'], className)}>
      <div className="container">
        <div className="com-header--inner">
          <h1>PICK ONE NAME</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
