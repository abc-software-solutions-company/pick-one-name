import Loki from 'lokijs';

import {IPlayer} from './players';

export interface IDatabase {
  loki: Loki;
  players: Collection<IPlayer>;
  save: () => void;
}
export default class Database implements IDatabase {
  loki: Loki;

  players!: Collection<IPlayer>;

  constructor(name: string) {
    this.loki = new Loki(name, {
      autosave: false,
      autoload: false,
      env: 'BROWSER'
    });

    this.loki.loadDatabase({}, () => {
      this.initTablePlayers();
    });
  }

  private initTablePlayers() {
    this.players = this.loki.getCollection<IPlayer>('players');

    if (!this.players) {
      this.players = this.loki.addCollection('players');
      this.loki.saveDatabase();
    }
  }

  save() {
    this.loki.saveDatabase();
  }
}
