import classnames from 'classnames';
import React, {FC} from 'react';

import styles from './style.module.scss';

interface IProps {
  className?: string;
  onAdd: () => void;
}

const Players: FC<IProps> = ({className}) => {
  return <div className={classnames(styles['player-list'], className)}></div>;
};

export default Players;
