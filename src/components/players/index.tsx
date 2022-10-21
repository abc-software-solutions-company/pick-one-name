import classNames from 'classnames';
import React, {FC, useState} from 'react';

import {GameActions, GameOperations, useGameDispatch, useGameState} from '@/states/game';

import PlayerList from './list';
import styles from './style.module.scss';
import PlayerSuggest from './suggest';
import PlayerToolbar from './toolbar';

interface IProps {
  className?: string;
}

const Players: FC<IProps> = ({className}) => {
  const [newPlayer, setNewPlayer] = useState('');

  const gameState = useGameState();
  const gameDispatch = useGameDispatch();

  const addNewPlayer = (playerName: string) => {
    if (!playerName) return;
    const names = playerName.split(',');
    const isMultiple = names.length > 0;
    if (isMultiple) {
      names.map(name => GameOperations.addPlayer({name: name.trim(), visible: true})(gameDispatch));
    } else {
      GameOperations.addPlayer({name: playerName.trim(), visible: true})(gameDispatch);
    }
    setNewPlayer('');
    GameOperations.getPlayers()(gameDispatch);
  };

  const deleteAllPlayers = () => {
    gameDispatch(GameActions.setShowDeleteAllPlayer({isShowDeleteAllPlayer: true}));
  };

  return (
    <div className={classNames(styles.players, styles[className + ''])}>
      <PlayerToolbar
        value={newPlayer}
        disabled={gameState.isSpinning}
        addPlayer={() => addNewPlayer(newPlayer)}
        deleteAllPlayers={deleteAllPlayers}
        onNewPlayerTextChange={e => setNewPlayer(e.target.value)}
        onNewPlayerKeyDown={e => e.code === 'Enter' && addNewPlayer(newPlayer)}
      />
      <PlayerSuggest />
      <PlayerList players={gameState.players} />
    </div>
  );
};

export default Players;
