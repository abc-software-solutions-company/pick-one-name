import React, {FC} from 'react';

import {IPlayer} from '@/localdb/models/player.model';
import {GameOperations, useGameDispatch, useGameState} from '@/states/game';

import PlayerItem from '../item';

interface IPlayerListProps {
  className?: string;
  players: IPlayer[];
}

const PlayerList: FC<IPlayerListProps> = ({players}) => {
  const gameState = useGameState();
  const gameDispatch = useGameDispatch();

  const onHide = (player: IPlayer) => {
    const newData = {...player, visible: false};
    GameOperations.updatePlayer(newData)(gameDispatch);
  };

  const onShow = (player: IPlayer) => {
    const newData = {...player, visible: true};
    GameOperations.updatePlayer(newData)(gameDispatch);
  };

  const onDelete = (player: IPlayer) => {
    GameOperations.deletePlayer(player)(gameDispatch);
  };

  const onTextChange = (player: IPlayer, name: string) => {
    GameOperations.updatePlayer({...player, name})(gameDispatch);
  };

  return (
    <div className={'list'}>
      <div className="scrollbar">
        {players.map(player => {
          return (
            <PlayerItem
              key={player.$loki}
              player={player}
              disabled={gameState.isSpinning}
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
