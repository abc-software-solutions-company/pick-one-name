import classNames from 'classnames';
import React, {FC} from 'react';

import {IPlayer} from '@/localdb/models/player.model';
import {GameOperations, useGameDispatch, useGameState} from '@/states/game';

import PlayerItem from '../item';
import styles from './style.module.scss';

interface IPlayerListProps {
  className?: string;
  players: IPlayer[];
}

const PlayerList: FC<IPlayerListProps> = ({className, players}) => {
  const gameState = useGameState();
  const gameDispatch = useGameDispatch();

  const onHide = async (player: IPlayer) => {
    await GameOperations.updatePlayer({...player, visible: false})(gameDispatch);
    await GameOperations.getPlayers()(gameDispatch);
  };
  const onShow = async (player: IPlayer) => {
    await GameOperations.updatePlayer({...player, visible: true})(gameDispatch);
    await GameOperations.getPlayers()(gameDispatch);
  };
  const onDelete = async (player: IPlayer) => GameOperations.deletePlayer(player)(gameDispatch);
  const onTextChange = async (player: IPlayer, name: string) => {
    await GameOperations.updatePlayer({...player, name})(gameDispatch);
    await GameOperations.getPlayers()(gameDispatch);
  };

  return (
    <div className={classNames(styles['players__player-list'], styles[className + ''])}>
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
