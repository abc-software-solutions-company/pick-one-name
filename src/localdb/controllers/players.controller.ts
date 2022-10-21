import {IDatabase} from '..';
import {IPlayer} from '../models/player.model';

export interface ICollectionPlayer {
  clear: () => void;
  list: () => IPlayer[];
  create: (data: IPlayer) => IPlayer;
  update: (data: IPlayer) => IPlayer;
  delete: (data: IPlayer) => IPlayer;
}

export default class CollectionPlayer implements ICollectionPlayer {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  clear() {
    this.db.players.removeDataOnly();
  }

  list() {
    const dynamicView = this.db.players.addDynamicView('dvPlayers');
    dynamicView.applySimpleSort('$loki', {desc: true});
    return dynamicView.data() as IPlayer[];
  }

  create(data: IPlayer) {
    const player = this.db.players.insert(data) as IPlayer;
    if (!player) throw Error("Can't add player.");
    return player;
  }

  update(data: IPlayer) {
    const player = this.db.players.by('$loki', data.$loki) as IPlayer;
    if (!player) throw Error("Can't update player, player not found.");
    this.db.players.update({...player, ...data});
    return player;
  }

  delete(data: IPlayer): IPlayer {
    const player = this.db.players.findOne({$loki: data.$loki}) as IPlayer;
    if (!player) throw Error("Can't delete player, player not found.");
    this.db.players.remove(player);
    return player;
  }
}
