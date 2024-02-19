import React, {FC, useEffect} from 'react';
import {IPlayer} from '@/localdb/models/player.model';
import {GameOperations, useGame} from '@/states/game';

import Button from '@/core-ui/button';
import useToast from '@/core-ui/toast';

import RandomMain from '@/components/common/random-main';
import LuckyWheel from '@/components/lucky-wheel';
import ConfirmBox from '@/components/modals/modal-confirm';
import Congrats from '@/components/modals/modal-congrats';

interface IProps {
  className?: string;
}

const Wheel: FC<IProps> = ({className}) => {
  const game = useGame();
  const toast = useToast();
  const visiblePlayers = game.state.players.items.filter(x => x.visible);

  const ToggleDeleteAllPlayers = (value: boolean) => game.dispatch(game.toggleShowDeleteAllPlayer(value));

  useEffect(() => {
    GameOperations.getSettings()(game.dispatch);
    GameOperations.getPlayers()(game.dispatch);
  }, [game.dispatch]);

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

  const hideWinner = (player: IPlayer) => {
    if (!player) throw Error('Player not found');
    GameOperations.updatePlayer({...player, visible: false})(game.dispatch);
    game.dispatch(game.toggleWinner(false));
    game.dispatch(game.setWinner(null));
    GameOperations.getPlayers()(game.dispatch);
    toast.show({type: 'info', title: '', content: `Người chơi "${player.name}" đã được ẩn.`});
  };

  return (
    <RandomMain
      className={className}
      title="Random Wheel"
      button={
        <Button
          className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-1 text-sm
          font-semibold text-neutral-50 hover:bg-blue-700 disabled:bg-slate-500 disabled:text-slate-400 md:h-14 md:py-4 md:px-8 md:text-lg lg:w-[40%]"
          variant="contained"
          text="Quay"
          onClick={run}
          disabled={game.state.isSpinning || visiblePlayers.length < 2}
        />
      }
    >
      <LuckyWheel
        className="m-auto"
        players={visiblePlayers}
        onComplete={onPlayerWin}
        trigger={
          visiblePlayers.length > 1 && (
            <Button text={game.state.isSpinning ? '' : 'Quay'} onClick={run} disabled={game.state.isSpinning} />
          )
        }
      />
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
        message="Bạn chắc chắn muốn xóa tất cả người chơi?"
        onYes={() => GameOperations.deleteAllPlayers()(game.dispatch)}
        onNo={() => ToggleDeleteAllPlayers(false)}
      />
    </RandomMain>
  );
};

export default Wheel;
