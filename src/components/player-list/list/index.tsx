import classnames from 'classnames';
import React, {FC} from 'react';

import {GameOperations, useGameDispatch} from '@/states/game';
import {IPlayer} from '@/utils/players';

import PlayerItem from '../item';

interface IPlayerListProps {
  className?: string;
  players: IPlayer[];
  disabled: boolean;
}

const PlayerList: FC<IPlayerListProps> = ({className, players, disabled}) => {
  const gameDispatch = useGameDispatch();

  const onHide = (player: IPlayer) => {
    GameOperations.updatePlayer({...player, visible: false})(gameDispatch);
  };

  const onShow = (player: IPlayer) => {
    GameOperations.updatePlayer({...player, visible: true})(gameDispatch);
  };

  const onDelete = (player: IPlayer) => {
    GameOperations.deletePlayer(player)(gameDispatch);
  };

  const onTextChange = (player: IPlayer, name: string) => {
    GameOperations.updatePlayer({...player, name})(gameDispatch);
  };

  return (
    <div className={classnames('list', className)}>
      <div className="scrollbar">
        {players.length > 0 &&
          players.map((player, index) => {
            return (
              <PlayerItem
                player={player}
                key={index}
                disabled={disabled}
                onHide={() => onHide(player)}
                onShow={() => onShow(player)}
                onDelete={() => onDelete(player)}
                onTextChange={e => onTextChange(player, e.target.value)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PlayerList;
