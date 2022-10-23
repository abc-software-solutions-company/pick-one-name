import classNames from 'classnames';
import React, {FC, useState} from 'react';

import {GameOperations, useGame} from '@/states/game';

import PlayerList from './list';
import styles from './style.module.scss';
import PlayerSuggest from './suggest';
import PlayerToolbar from './toolbar';

interface IProps {
  className?: string;
}

const Players: FC<IProps> = ({className}) => {
  const [newPlayer, setNewPlayer] = useState('');

  const game = useGame();

  const addNewPlayer = (playerName: string) => {
    if (!playerName) return;
    const names = playerName.split(',');
    const isMultiple = names.length > 0;
    if (isMultiple) {
      names.map(name => GameOperations.addPlayer({name: name.trim(), visible: true})(game.dispatch));
    } else {
      GameOperations.addPlayer({name: playerName.trim(), visible: true})(game.dispatch);
    }
    setNewPlayer('');
    GameOperations.getPlayers()(game.dispatch);
  };

  const deleteAllPlayers = () => game.dispatch(game.toggleShowDeleteAllPlayer(true));

  return (
    <div className={classNames(styles.players, styles[className + ''])}>
      <PlayerToolbar
        value={newPlayer}
        disabled={game.state.isSpinning}
        addPlayer={() => addNewPlayer(newPlayer)}
        deleteAllPlayers={deleteAllPlayers}
        onNewPlayerTextChange={e => setNewPlayer(e.target.value)}
        onNewPlayerKeyDown={e => e.code === 'Enter' && addNewPlayer(newPlayer)}
      />
      <PlayerSuggest />
      <PlayerList players={game.state.players.items} />
    </div>
  );
};

export default Players;
