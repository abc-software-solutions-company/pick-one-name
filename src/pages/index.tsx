import classNames from 'classnames';
import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, useEffect, useState} from 'react';

import Seo from '@/components/common/seo/seo';
import LuckyWheel from '@/components/lucky-wheel';
import {Media} from '@/components/media';
import ConfirmBox from '@/components/modal-confirm';
import Congrats from '@/components/modal-congrats';
import Button from '@/core-ui/button';
import Drawer from '@/core-ui/drawer';
import Icon from '@/core-ui/icon';
import IconButton from '@/core-ui/icon-button';
import Input from '@/core-ui/input';
import useToast from '@/core-ui/toast';
import LayoutDefault from '@/layouts/default';
import Database from '@/utils/database';
import CollectionPlayer, {IPlayer} from '@/utils/players';

import styles from './index.module.scss';

const db = new Database('lucky.db');
const playerCollection = new CollectionPlayer(db);

export default function PageHome() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenDeleteAll, setIsOpenDeleteAll] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [newPlayer, setNewPlayer] = useState('');
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [winner, setWinner] = useState<IPlayer>();

  const toast = useToast();

  const getPlayers = () => {
    const data = playerCollection.list();
    setPlayers(data);
  };

  const addNewPlayer = (playerName: string) => {
    if (!playerName) return;
    const names = playerName.split(',');
    const isMultiple = names.length > 0;
    if (isMultiple) {
      names.map(name => playerCollection.create({name: name.trim(), visible: true}));
    } else {
      playerCollection.create({name: playerName, visible: true});
    }
    setNewPlayer('');
    getPlayers();
  };

  const updatePlayer = (player: IPlayer) => {
    playerCollection.update(player);
    getPlayers();
  };

  const deletePlayer = (player: IPlayer) => {
    playerCollection.delete(player);
    getPlayers();
  };

  const deleteAllPlayer = () => {
    setIsOpenDeleteAll(false);
    playerCollection.clear();
    getPlayers();
  };

  const hideWinner = (player: IPlayer) => {
    if (!player) throw Error('Player not found');
    const newData = player;
    newData.visible = false;
    playerCollection.update(player);
    setIsWin(false);
    getPlayers();
    toast.show({type: 'info', title: '', content: `Player "${player.name}" is now hidden`});
  };

  const run = () => {
    const visiblePlayers = players.filter(x => x.visible);
    const playerSelected = visiblePlayers[Math.floor(Math.random() * visiblePlayers.length)];
    setWinner(playerSelected);
    setIsRunning(true);
    setIsOpenDrawer(false);
  };

  const onPlayerWin = () => {
    setTimeout(() => {
      setIsWin(true);
      setIsRunning(false);
    }, 500);
  };
  const onConfirmDeleteAllPlayer = () => deleteAllPlayer();
  const onCancelDeleteAllPlayer = () => setIsOpenDeleteAll(false);
  const onKeyDownNewPlayer = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') addNewPlayer(newPlayer);
  };
  const onNewPlayerChange: ChangeEventHandler<HTMLInputElement> = e => setNewPlayer(e.target.value);
  const onPlayerChange = (e: ChangeEvent<HTMLInputElement>, data: IPlayer) => {
    const newData = data;
    newData.name = e.target.value;
    updatePlayer(newData);
  };

  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className={styles['page-index']}>
      <Seo
        title="Wheel Of Fortune"
        description="A free wheel spinner for a random picker, free random spinner wheels to help make decisions. Enter choices and spin the wheel to decide a random result."
        images={[
          {
            url: '/luckydraw.jpg',
            width: 1200,
            height: 630,
            alt: 'Wheel Of Fortune'
          }
        ]}
      />
      <div className="container">
        <div className="page-index-inner">
          <div className="flex w-full py-5">
            <div className="flex flex-grow flex-col items-center overflow-hidden">
              <LuckyWheel
                className="m-auto"
                players={
                  players.length > 0
                    ? players
                    : [
                        {name: '', visible: true},
                        {name: '', visible: true},
                        {name: '', visible: true},
                        {name: '', visible: true},
                        {name: '', visible: true},
                        {name: '', visible: true},
                        {name: '', visible: true},
                        {name: '', visible: true}
                      ]
                }
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
                  <div className="toolbar">
                    <Input
                      onChange={onNewPlayerChange}
                      value={newPlayer}
                      spellCheck={false}
                      placeholder="Enter name(s)"
                      onKeyDown={onKeyDownNewPlayer}
                      groupEnd={
                        <Button
                          variant="contained"
                          color="primary"
                          text="Save"
                          onClick={() => addNewPlayer(newPlayer)}
                          disabled={!newPlayer}
                        />
                      }
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      text="Delete All"
                      disabled={players.length === 0 || isRunning}
                      onClick={() => setIsOpenDeleteAll(true)}
                    />
                  </div>
                  <div>
                    <span className="mt-1 mb-2 block text-xs text-slate-400">
                      Add multiple names using commas: &apos;John,Tony&apos;
                    </span>
                  </div>
                  <div className="list">
                    <div className="scrollbar">
                      {players.length > 0 &&
                        players.map((player, index) => {
                          return (
                            <div className={classNames('item', !player.visible && 'disabled')} key={index}>
                              <Input
                                className={'flex-grow'}
                                value={player.name}
                                onChange={e => onPlayerChange(e, player)}
                                readOnly={isRunning}
                              />
                              {!player.visible && (
                                <IconButton
                                  name="ico-eye"
                                  onClick={() => updatePlayer({...player, visible: true})}
                                  disabled={isRunning}
                                />
                              )}
                              {player.visible && (
                                <IconButton
                                  name="ico-eye-off"
                                  onClick={() => updatePlayer({...player, visible: false})}
                                  disabled={isRunning}
                                />
                              )}
                              <IconButton
                                name="ico-trash-2"
                                onClick={() => deletePlayer(player)}
                                disabled={isRunning}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <Button
                    className="btn-start"
                    variant="contained"
                    color="primary"
                    text="Start"
                    onClick={run}
                    disabled={isRunning || players.filter(x => x.visible).length < 2}
                  />
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
      <Drawer anchor="right" open={isOpenDrawer} backdrop={true} onClose={() => setIsOpenDrawer(false)}>
        <Button
          className={styles['btn-show-players']}
          variant="contained"
          color="primary"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          <Icon name="ico-user" size={28} />
        </Button>
        <div className={classNames(styles.players, styles['in-drawer'])}>
          <div className="toolbar">
            <Input
              onChange={onNewPlayerChange}
              value={newPlayer}
              spellCheck={false}
              placeholder="Enter name(s)"
              onKeyDown={onKeyDownNewPlayer}
              groupEnd={
                <Button
                  variant="contained"
                  color="primary"
                  text="Save"
                  onClick={() => addNewPlayer(newPlayer)}
                  disabled={!newPlayer}
                />
              }
            />
            <Button
              variant="contained"
              color="primary"
              disabled={players.length === 0 || isRunning}
              onClick={() => setIsOpenDeleteAll(true)}
            >
              <Icon name="ico-trash-2" />
            </Button>
          </div>
          <div>
            <span className="mt-1 mb-2 block text-xs text-slate-400">
              Add multiple names using commas: &apos;John,Tony&apos;
            </span>
          </div>
          <div className="list">
            <div className="scrollbar">
              {players.length > 0 &&
                players.map((player, index) => {
                  return (
                    <div className={classNames('item', !player.visible && 'disabled')} key={index}>
                      <Input
                        className={'flex-grow'}
                        value={player.name}
                        onChange={e => onPlayerChange(e, player)}
                        readOnly={isRunning}
                      />
                      {!player.visible && (
                        <IconButton
                          name="ico-eye"
                          onClick={() => updatePlayer({...player, visible: true})}
                          disabled={isRunning}
                        />
                      )}
                      {player.visible && (
                        <IconButton
                          name="ico-eye-off"
                          onClick={() => updatePlayer({...player, visible: false})}
                          disabled={isRunning}
                        />
                      )}
                      <IconButton name="ico-trash-2" onClick={() => deletePlayer(player)} disabled={isRunning} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

PageHome.Layout = LayoutDefault;
