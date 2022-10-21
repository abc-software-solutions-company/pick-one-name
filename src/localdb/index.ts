import Loki from 'lokijs';

import {IPlayer} from './models/player.model';
import {ISetting} from './models/setting.model';

export interface IDatabase {
  loki: Loki;
  players: Collection<IPlayer>;
  settings: Collection<ISetting>;
  save: () => void;
}
export default class Database implements IDatabase {
  loki: Loki;

  players: Collection<IPlayer>;

  settings: Collection<ISetting>;

  constructor(name: string) {
    this.loki = new Loki(name, {
      autoload: false,
      autosave: true,
      autosaveInterval: 700,
      env: 'BROWSER'
    });
    this.players = this.loki.getCollection<IPlayer>('players');
    this.settings = this.loki.getCollection<ISetting>('settings');

    this.loki.loadDatabase({}, () => {
      this.initTablePlayers();
      this.initTableSettings();
    });
  }

  private initTablePlayers() {
    if (!this.players) {
      this.players = this.loki.addCollection<IPlayer>('players');
    }
  }

  private initTableSettings() {
    if (!this.settings) {
      this.settings = this.loki.addCollection<ISetting>('settings');
      const recordCount = this.settings.count();
      if (!recordCount) this.settings.insert({isBackgroundMusicOn: true, isSoundEffectOn: false});
    }
  }

  save() {
    this.loki.saveDatabase();
  }
}
