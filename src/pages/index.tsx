import classnames from 'classnames';
import React, {ChangeEventHandler, KeyboardEvent, useEffect, useState} from 'react';

import GameSettings from '@/components/game-settings';
import LuckyWheel from '@/components/lucky-wheel';
import {Media} from '@/components/media';
import ConfirmBox from '@/components/modal-confirm';
import Congrats from '@/components/modal-congrats';
import PlayerList from '@/components/player-list/list';
import PlayerSuggest from '@/components/player-list/suggest';
import PlayerToolbar from '@/components/player-list/toolbar';
import Button from '@/core-ui/button';
import Drawer from '@/core-ui/drawer';
import Icon from '@/core-ui/icon';
import useToast from '@/core-ui/toast';
import LayoutDefault from '@/layouts/default';
import {GameOperations, useGameDispatch, useGameState} from '@/states/game';
import {GlobalActions, useGlobalDispatch, useGlobalState} from '@/states/global';
import {IPlayer} from '@/utils/players';

import styles from './index.module.scss';

export default function PageHome() {
  const [isOpenDeleteAll, setIsOpenDeleteAll] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [newPlayer, setNewPlayer] = useState('');
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [winner, setWinner] = useState<IPlayer>();

  const toast = useToast();
  const globalState = useGlobalState();
  const gameState = useGameState();
  const globalDispatch = useGlobalDispatch();
  const gameDispatch = useGameDispatch();

  const getAllPlayers = () => {
    GameOperations.getPlayers()(gameDispatch);
  };

  const addNewPlayer = (playerName: string) => {
    if (!playerName) return;
    const names = playerName.split(',');
    const isMultiple = names.length > 0;
    if (isMultiple) {
      names.map(name => GameOperations.addPlayer({name: name.trim(), visible: true})(gameDispatch));
    } else {
      GameOperations.addPlayer({name: playerName, visible: true})(gameDispatch);
    }
    setNewPlayer('');
    getAllPlayers();
  };

  const deleteAllPlayer = () => {
    setIsOpenDeleteAll(false);
    GameOperations.deleteAllPlayers()(gameDispatch);
    getAllPlayers();
  };

  const hideWinner = (player: IPlayer) => {
    if (!player) throw Error('Player not found');
    const newData = player;
    newData.visible = false;
    GameOperations.updatePlayer(player)(gameDispatch);
    setIsWin(false);
    getAllPlayers();
    toast.show({type: 'info', title: '', content: `Player "${player.name}" is now hidden.`});
  };

  const run = () => {
    const visiblePlayers = gameState.players.filter(x => x.visible);
    const playerSelected = visiblePlayers[Math.floor(Math.random() * visiblePlayers.length)];
    setWinner(playerSelected);
    setIsRunning(true);
  };

  const onPlayerWin = () => {
    setTimeout(() => {
      setIsWin(true);
      setIsRunning(false);
    }, 500);
  };
  const onConfirmDeleteAllPlayer = () => deleteAllPlayer();
  const onCancelDeleteAllPlayer = () => setIsOpenDeleteAll(false);
  const onNewPlayerKeydown = (e: KeyboardEvent<HTMLInputElement>) => e.code === 'Enter' && addNewPlayer(newPlayer);
  const onNewPlayerTextChange: ChangeEventHandler<HTMLInputElement> = e => setNewPlayer(e.target.value);

  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  useEffect(() => {
    getAllPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPlayers(gameState.players);
  }, [gameState.players]);

  return (
    <div className={styles['page-index']}>
      <div className="container">
        <div className="page-index-inner relative">
          <div className="flex w-full py-5">
            <div className="flex flex-grow flex-col items-center overflow-hidden">
              <GameSettings />
              <LuckyWheel
                className="m-auto"
                players={players.filter(x => x.visible)}
                bgMusic={gameState.isBackgroundMusicOn}
                soundEffect={gameState.isSoundEffectOn}
                winner={winner}
                onComplete={onPlayerWin}
                trigger={
                  players.length > 1 && <Button text={isRunning ? '' : 'Start'} onClick={run} disabled={isRunning} />
                }
              />
            </div>
            <Media greaterThan="md">
              <div className={styles['list-of-players']}>
                <div className={styles.players}>
                  <PlayerToolbar
                    value={newPlayer}
                    disabled={players.length === 0 || isRunning}
                    addPlayer={() => addNewPlayer(newPlayer)}
                    deleteAllPlayer={() => setIsOpenDeleteAll(true)}
                    onNewPlayerTextChange={onNewPlayerTextChange}
                    onNewPlayerKeyDown={onNewPlayerKeydown}
                  />
                  <PlayerSuggest />
                  <PlayerList players={players} disabled={isRunning} />
                  {/* <Button
                    className="btn-start"
                    variant="contained"
                    color="primary"
                    text="Start"
                    onClick={run}
                    disabled={isRunning || players.filter(x => x.visible).length < 2}
                  /> */}
                </div>
              </div>
            </Media>
            <Congrats
              data={winner}
              open={isWin}
              onClose={() => {
                setIsWin(false);
                setWinner(undefined);
              }}
              onHidePlayer={() => hideWinner(winner!)}
            />
            <ConfirmBox
              open={isOpenDeleteAll}
              message="Are you sure to delete all players?"
              onYes={onConfirmDeleteAllPlayer}
              onNo={onCancelDeleteAllPlayer}
            />
          </div>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={globalState.isOpenDrawer}
        backdrop={true}
        onClose={() => globalDispatch(GlobalActions.setDrawerOpen(false))}
      >
        <Button
          className={styles['btn-show-players']}
          variant="contained"
          color="primary"
          onClick={() => globalDispatch(GlobalActions.setDrawerOpen(!globalState.isOpenDrawer))}
        >
          <Icon name="ico-user" size={28} />
        </Button>
        <div className={classnames(styles.players, styles['in-drawer'])}></div>
      </Drawer>
    </div>
  );
}

PageHome.Layout = LayoutDefault;
