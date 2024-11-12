import { CollectionItem } from '../models/collection-model';

export class LoadItems {
  static readonly type = '[Item] set all';
  constructor(public payload: string) {}
}
