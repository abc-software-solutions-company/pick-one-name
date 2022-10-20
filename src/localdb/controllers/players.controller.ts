import {IDatabase} from '..';
import {IPlayer} from '../models/player.model';

export interface ICollectionPlayer {
  clear: () => void;
  list: () => IPlayer[];
}

export default class CollectionPlayer implements ICollectionPlayer {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  clear() {
    this.db.players.removeDataOnly();
    this.db.save();
  }

  list() {
    const dynamicView = this.db.players.addDynamicView('dvPlayers');
    dynamicView.applySimpleSort('$loki', {desc: true});
    return dynamicView.data();
  }

  create(data: IPlayer) {
    const player = this.db.players.insert(data);
    if (!player) throw Error("Can't add player.");
    this.db.save();
    return player;
  }

  update(data: IPlayer) {
    const player = this.db.players.by('$loki', data.$loki);
    if (!player) throw Error("Can't update player, player not found.");
    const newData = Object.assign(player, data);
    this.db.players.update(newData);
    this.db.save();
    return player;
  }

  delete(data: IPlayer) {
    const player = this.db.players.findOne({$loki: data.$loki});
    if (!player) throw Error("Can't delete player, player not found.");
    this.db.players.remove(player);
    this.db.save();
    return player;
  }
}
