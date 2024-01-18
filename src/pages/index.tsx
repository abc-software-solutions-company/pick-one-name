import React, {useEffect} from 'react';

import GameSettings from '@/components/game-settings';
import LuckyWheel from '@/components/lucky-wheel';
import ConfirmBox from '@/components/modals/modal-confirm';
import Congrats from '@/components/modals/modal-congrats';
import Players from '@/components/players';
import Button from '@/core-ui/button';
import Drawer from '@/core-ui/drawer';
import Icon from '@/core-ui/icon';
import useToast from '@/core-ui/toast';
import LayoutWheel from '@/layouts/old-layout';
import {IPlayer} from '@/localdb/models/player.model';
import {GameOperations, useGame} from '@/states/game';
import {useGlobal} from '@/states/global';

import styles from './index.module.scss';

export default function PageHome() {
  const toast = useToast();
  const global = useGlobal();
  const game = useGame();

  const visiblePlayers = game.state.players.items.filter(x => x.visible);

  const ToggleDeleteAllPlayers = (value: boolean) => game.dispatch(game.toggleShowDeleteAllPlayer(value));

  const hideWinner = (player: IPlayer) => {
    if (!player) throw Error('Player not found');
    GameOperations.updatePlayer({...player, visible: false})(game.dispatch);
    game.dispatch(game.toggleWinner(false));
    game.dispatch(game.setWinner(null));
    GameOperations.getPlayers()(game.dispatch);
    toast.show({type: 'info', title: '', content: `Player "${player.name}" is now hidden.`});
  };

  const run = () => {
    const playerSelected = visiblePlayers[Math.floor(Math.random() * visiblePlayers.length)];
    game.dispatch(game.toggleSpining(true));
    game.dispatch(game.setRunTime(new Date()));
    game.dispatch(game.setWinner(playerSelected));
  };

  const onPlayerWin = () => {
    setTimeout(() => {
      game.dispatch(game.toggleSpining(false));
      game.dispatch(game.setRunTime(null));
      game.dispatch(game.toggleWinner(true));
    }, 500);
  };

  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  useEffect(() => {
    GameOperations.getSettings()(game.dispatch);
    GameOperations.getPlayers()(game.dispatch);
  }, [game.dispatch]);

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
                    <Button
                      text={game.state.isSpinning ? '' : 'Start'}
                      onClick={run}
                      disabled={game.state.isSpinning}
                    />
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
                  disabled={game.state.isSpinning || visiblePlayers.length < 2}
                />
              </div>
            </div>
            <Congrats
              player={game.state.winner!}
              open={game.state.isShowWinner}
              onClose={() => {
                game.dispatch(game.toggleWinner(false));
                game.dispatch(game.setWinner(null));
              }}
              onHidePlayer={() => hideWinner(game.state.winner!)}
            />
            <ConfirmBox
              open={game.state.isShowDeleteAllPlayers}
              message="Are you sure to delete all players?"
              onYes={() => GameOperations.deleteAllPlayers()(game.dispatch)}
              onNo={() => ToggleDeleteAllPlayers(false)}
            />
          </div>
        </div>
      </div>
      <GameSettings className="side" />
      <Drawer
        className="block lg:hidden"
        anchor="right"
        open={global.state.isOpenDrawer}
        backdrop={true}
        onClose={() => global.dispatch(global.toggleDrawer(false))}
      >
        <Button
          className={styles['btn-show-players']}
          variant="contained"
          color="primary"
          onClick={() => global.dispatch(global.toggleDrawer(!global.state.isOpenDrawer))}
        >
          <Icon name="ico-user" />
        </Button>
        <Players className="drawer" />
      </Drawer>
    </div>
  );
}

PageHome.Layout = LayoutWheel;
