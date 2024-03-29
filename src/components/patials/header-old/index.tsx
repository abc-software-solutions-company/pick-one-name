import React, {FC} from 'react';
import classnames from 'classnames';

import GameSettings from '../../game-settings';
import SoundController from '../../sound-controller';

import styles from './header.module.scss';

interface IProps {
  className?: string;
}

const HeaderOld: FC<IProps> = ({className}) => {
  return (
    <div className={classnames(styles['com-header'], className)}>
      <div className="container">
        <div className="com-header--inner">
          <h1>PICK ONE NAME</h1>
          <GameSettings className="header" />
          <SoundController />
        </div>
      </div>
    </div>
  );
};

export default HeaderOld;
