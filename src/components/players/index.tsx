import React, {FC, useState} from 'react';
import classNames from 'classnames';
import {useSetting} from '@/hooks/use-setting';
import {GameOperations, useGame} from '@/states/game';

import HideButton from '../option/hide-button';
import SettingButton from '../option/setting-button';

import PlayerList from './list';
import PlayerSuggest from './suggest';
import PlayerToolbar from './toolbar';

interface IProps {
  className?: string;
}

const Players: FC<IProps> = ({className}) => {
  const [newPlayer, setNewPlayer] = useState('');
  const {setIsSettingOpen} = useSetting();

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
    <div
      className={classNames(
        className,
        'gap-4 rounded-lg border border-gray-300 bg-zinc-50 px-2 py-5 lg:gap-8 lg:rounded-3xl lg:px-8 lg:py-10'
      )}
    >
      <div className="flex w-full flex-col gap-2 lg:gap-3">
        <PlayerToolbar
          value={newPlayer}
          disabled={game.state.isSpinning}
          addPlayer={() => addNewPlayer(newPlayer)}
          deleteAllPlayers={deleteAllPlayers}
          onNewPlayerTextChange={e => setNewPlayer(e.target.value)}
          onNewPlayerKeyDown={e => e.code === 'Enter' && addNewPlayer(newPlayer)}
        />
        <PlayerSuggest />
      </div>
      <PlayerList players={game.state.players.items} />
      <div className="flex items-center gap-2 self-stretch align-bottom md:gap-4">
        <SettingButton onClick={() => setIsSettingOpen(true)} />
        <HideButton />
      </div>
    </div>
  );
};

export default Players;
