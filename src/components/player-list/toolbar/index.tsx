import classnames from 'classnames';
import React, {ChangeEventHandler, FC, KeyboardEvent} from 'react';

import Button from '@/core-ui/button';
import Input from '@/core-ui/input';

interface IPlayerToolbarProps {
  className?: string;
  value: string;
  disabled: boolean;
  addPlayer: () => void;
  deleteAllPlayer: () => void;
  onNewPlayerTextChange: ChangeEventHandler<HTMLInputElement>;
  onNewPlayerKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const PlayerToolbar: FC<IPlayerToolbarProps> = ({
  className,
  value,
  disabled,
  addPlayer,
  deleteAllPlayer,
  onNewPlayerKeyDown,
  onNewPlayerTextChange
}) => {
  return (
    <div className={classnames(className)}>
      <div className="toolbar">
        <Input
          value={value}
          spellCheck={false}
          placeholder="Enter name(s)"
          onKeyDown={onNewPlayerKeyDown}
          onChange={onNewPlayerTextChange}
          groupEnd={<Button variant="contained" color="primary" text="Save" onClick={addPlayer} disabled={!value} />}
        />
        <Button variant="contained" color="primary" text="Delete All" disabled={disabled} onClick={deleteAllPlayer} />
      </div>
    </div>
  );
};

export default PlayerToolbar;
