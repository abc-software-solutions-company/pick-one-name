import React, {useEffect} from 'react';

import GameSettings from '@/components/game-settings';
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

  const visiblePlayers = gameState.players.filter(x => x.visible);

  const ToggleDeleteAllPlayers = (value: boolean) => {
    gameDispatch(GameActions.setShowDeleteAllPlayer({isShowDeleteAllPlayer: value}));
  };

  const hideWinner = (player: IPlayer) => {
    if (!player) throw Error('Player not found');
    GameOperations.updatePlayer({...player, visible: false})(gameDispatch);
    gameDispatch(GameActions.toggleWinning({isShowWinning: false}));
    gameDispatch(GameActions.setWinner({winner: null}));
    GameOperations.getPlayers()(gameDispatch);
    toast.show({type: 'info', title: '', content: `Player "${player.name}" is now hidden.`});
  };

  const run = () => {
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
    GameOperations.getSettings()(gameDispatch);
    GameOperations.getPlayers()(gameDispatch);
  }, [gameDispatch]);

  return (
    <div className={styles['page-index']}>
      <div className="container">
        <div className="page-index-inner">
          <div className="flex w-full justify-between py-5">
            <div className="flex grow items-center overflow-hidden">
              <LuckyWheel
                className="m-auto"
                players={visiblePlayers}
                onComplete={onPlayerWin}
                trigger={
                  visiblePlayers.length > 1 && (
                    <Button text={gameState.isSpinning ? '' : 'Start'} onClick={run} disabled={gameState.isSpinning} />
                  )
                }
              />
            </div>
            <div className="hidden max-w-[360px] grow items-center lg:flex">
              <div>
                <Players />
                <Button
                  className={styles['btn-start']}
                  variant="contained"
                  color="primary"
                  text="Start"
                  onClick={run}
                  disabled={gameState.isSpinning || visiblePlayers.length < 2}
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
              onYes={() => GameOperations.deleteAllPlayers()(gameDispatch)}
              onNo={() => ToggleDeleteAllPlayers(false)}
            />
          </div>
        </div>
      </div>
      <GameSettings className="side" />
      <Drawer
        className="block lg:hidden"
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
          <Icon name="ico-user" />
        </Button>
        <Players className="drawer" />
      </Drawer>
    </div>
  );
}

PageHome.Layout = LayoutDefault;
