import React, {FC} from 'react';
import classNames from 'classnames';
import {IPlayer} from '@/localdb/models/player.model';
import {GameOperations, useGame} from '@/states/game';

import PlayerItem from '../item';

import styles from './style.module.scss';

interface IPlayerListProps {
  className?: string;
  players: IPlayer[];
}

const PlayerList: FC<IPlayerListProps> = ({className, players}) => {
  const game = useGame();

  const onHide = async (player: IPlayer) => {
    await GameOperations.updatePlayer({...player, visible: false})(game.dispatch);
    await GameOperations.getPlayers()(game.dispatch);
  };
  const onShow = async (player: IPlayer) => {
    await GameOperations.updatePlayer({...player, visible: true})(game.dispatch);
    await GameOperations.getPlayers()(game.dispatch);
  };
  const onDelete = async (player: IPlayer) => GameOperations.deletePlayer(player)(game.dispatch);
  const onTextChange = async (player: IPlayer, name: string) => {
    await GameOperations.updatePlayer({...player, name})(game.dispatch);
    await GameOperations.getPlayers()(game.dispatch);
  };

  return (
    <div className={classNames(styles['players__player-list'], styles[className + ''])}>
      <div className="scrollbar">
        {players.map(player => {
          return (
            <PlayerItem
              key={player.$loki}
              player={player}
              disabled={game.state.isSpinning}
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
