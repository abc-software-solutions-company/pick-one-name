import {IDatabase} from './database';

export interface ICollectionPlayer {
  clear: () => void;
  list: () => IPlayer[];
}

export interface IPlayer {
  $loki?: number;
  name: string;
  visible: boolean;
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
    return this.db.players.find().reverse();
  }

  create(data: IPlayer) {
    const player = this.db.players.insert(data);
    this.db.save();
    return player;
  }

  update(data: IPlayer) {
    const player = this.db.players.findOne({$loki: data.$loki});

    if (!player) throw Error('Player not found.');

    player.name = data.name;
    player.visible = data.visible;

    this.db.players.update(player);
    this.db.save();

    return player;
  }

  delete(data: IPlayer) {
    const player = this.db.players.find({$loki: data.$loki});

    if (!player) throw Error('Player not found.');

    this.db.players.remove(player);
    this.db.save();

    return player[0];
  }
}
