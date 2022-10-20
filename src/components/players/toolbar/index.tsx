import classnames from 'classnames';
import React, {ChangeEventHandler, FC, KeyboardEvent} from 'react';

import Button from '@/core-ui/button';
import Input from '@/core-ui/input';

interface IPlayerToolbarProps {
  className?: string;
  value?: string;
  disabled?: boolean;
  addPlayer: () => void;
  deleteAllPlayers: () => void;
  onNewPlayerTextChange: ChangeEventHandler<HTMLInputElement>;
  onNewPlayerKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const PlayerToolbar: FC<IPlayerToolbarProps> = ({
  className,
  value,
  disabled = false,
  // addPlayer,
  deleteAllPlayers,
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
          // groupEnd={<Button variant="contained" color="primary" text="Save" onClick={addPlayer} />}
        />
        <Button variant="contained" color="primary" text="Delete All" disabled={disabled} onClick={deleteAllPlayers} />
      </div>
    </div>
  );
};

export default PlayerToolbar;
