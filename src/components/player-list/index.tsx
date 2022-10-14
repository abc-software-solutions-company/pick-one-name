import classnames from 'classnames';
import React, {FC} from 'react';

interface IProps {
  className?: string;
  onAdd: () => void;
}

const PlayerList: FC<IProps> = ({className}) => {
  return (
    <div className={classnames(className)}>
      <p>...</p>
    </div>
  );
};

export default PlayerList;
