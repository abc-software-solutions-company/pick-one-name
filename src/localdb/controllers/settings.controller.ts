import {IDatabase} from '..';
import {ISetting} from '../models/setting.model';

export interface ICollectionSetting {
  get: () => ISetting;
  set: (data: ISetting) => ISetting;
}

export default class CollectionSetting implements ICollectionSetting {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  get() {
    const setting = this.db.settings.findOne({$loki: 1}) as ISetting;
    if (!setting) throw Error("Can't get settings, settings not found.");
    return setting;
  }

  set(data: ISetting) {
    const setting = this.db.settings.findOne({$loki: 1}) as ISetting;
    if (!setting) throw Error("Can't save settings, settings not found.");
    const newData = Object.assign(setting, data);
    this.db.settings.update(newData);
    return setting;
  }
}
