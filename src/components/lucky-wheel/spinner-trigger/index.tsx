import classnames from 'classnames';
import React, {FC, ReactNode} from 'react';

import styles from './style.module.scss';

interface IProps {
  className?: string;
  trigger?: ReactNode;
}

const SpinnerTrigger: FC<IProps> = ({className, trigger}) => {
  return <div className={classnames(styles['wheel-decide__trigger'], className)}>{trigger}</div>;
};

export default SpinnerTrigger;
