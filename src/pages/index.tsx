import classnames from 'classnames';
import React, {useEffect} from 'react';

import LuckyWheel from '@/components/lucky-wheel';
import ConfirmBox from '@/components/modal-confirm';
import Congrats from '@/components/modal-congrats';
import Players from '@/components/players';
import Button from '@/core-ui/button';
import Drawer from '@/core-ui/drawer';
import Icon from '@/core-ui/icon';
import useToast from '@/core-ui/toast';
import LayoutDefault from '@/layouts/default';
import {IPlayer} from '@/localdb/models/player.model';
import {GameActions, GameOperations, useGameDispatch, useGameState} from '@/states/game';
import {GlobalActions, useGlobalDispatch, useGlobalState} from '@/states/global';

import styles from './index.module.scss';

export default function PageHome() {
  const toast = useToast();
  const globalState = useGlobalState();
  const gameState = useGameState();
  const globalDispatch = useGlobalDispatch();
  const gameDispatch = useGameDispatch();

  const getSettings = () => {
    GameOperations.getSettings()(gameDispatch);
  };

  const getAllPlayers = () => {
    GameOperations.getPlayers()(gameDispatch);
  };

  const ToggleDeleteAllPlayers = (value: boolean) => {
    gameDispatch(GameActions.setShowDeleteAllPlayer({isShowDeleteAllPlayer: value}));
  };

  const deleteAllPlayer = () => {
    GameOperations.deleteAllPlayers()(gameDispatch);
    ToggleDeleteAllPlayers(false);
    getAllPlayers();
  };

  const hideWinner = (player: IPlayer) => {
    if (!player) throw Error('Player not found');
    GameOperations.updatePlayer({...player, visible: false})(gameDispatch);
    gameDispatch(GameActions.toggleWinning({isShowWinning: false}));
    gameDispatch(GameActions.setWinner({winner: null}));
    getAllPlayers();
    toast.show({type: 'info', title: '', content: `Player "${player.name}" is now hidden.`});
  };

  const run = () => {
    const visiblePlayers = gameState.players.filter(x => x.visible);
    const playerSelected = visiblePlayers[Math.floor(Math.random() * visiblePlayers.length)];
    gameDispatch(GameActions.toggleSpining({isSpinning: true}));
    gameDispatch(GameActions.setRunTime({runAt: new Date()}));
    gameDispatch(GameActions.setWinner({winner: playerSelected}));
  };

  const onPlayerWin = () => {
    setTimeout(() => {
      gameDispatch(GameActions.toggleSpining({isSpinning: false}));
      gameDispatch(GameActions.setRunTime({runAt: null}));
      gameDispatch(GameActions.toggleWinning({isShowWinning: true}));
    }, 500);
  };

  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  useEffect(() => {
    getSettings();
    getAllPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles['page-index']}>
      <div className="container">
        <div className="page-index-inner relative">
          <div className="flex w-full py-5">
            <div className="flex flex-grow flex-col items-center overflow-hidden">
              <LuckyWheel
                className="m-auto"
                players={gameState.players.filter(x => x.visible)}
                onComplete={onPlayerWin}
                trigger={
                  <Button text={gameState.isSpinning ? '' : 'Start'} onClick={run} disabled={gameState.isSpinning} />
                }
              />
            </div>
            <div className="ml-8 h-full">
              <div className={styles.players}>
                <Players />
                <Button
                  className="btn-start"
                  variant="contained"
                  color="primary"
                  text="Start"
                  onClick={run}
                  disabled={gameState.isSpinning}
                />
              </div>
            </div>
            <Congrats
              player={gameState.winner!}
              open={gameState.isShowWinning}
              onClose={() => {
                gameDispatch(GameActions.toggleWinning({isShowWinning: false}));
                gameDispatch(GameActions.setWinner({winner: null}));
              }}
              onHidePlayer={() => hideWinner(gameState.winner!)}
            />
            <ConfirmBox
              open={gameState.isShowDeleteAllPlayer}
              message="Are you sure to delete all players?"
              onYes={deleteAllPlayer}
              onNo={() => ToggleDeleteAllPlayers(false)}
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
