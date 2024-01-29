import classnames from 'classnames';
import React, {FC} from 'react';

interface IPlayerSuggestProps {
  className?: string;
}

const PlayerSuggest: FC<IPlayerSuggestProps> = ({className}) => {
  return (
    <div className={classnames(className)}>
      <span className="text-xs text-slate-400">Add multiple names using commas: &apos;John,Tony&apos;</span>
    </div>
  );
};

export default PlayerSuggest;
