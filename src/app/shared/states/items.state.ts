import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LoadItems } from '../actions/item.actions';
import { CollectionItem } from '../models/collection-model';
import { CollectionService } from '../services/collection-service';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
export interface ItemStateModel {
  items: CollectionItem[];
  loading: boolean;
}

@State<ItemStateModel>({
  name: 'items',
  defaults: {
    items: [],
    loading: false,
  },
})
@Injectable()
export class ItemsState {
  constructor(private colService: CollectionService) {}

  @Selector()
  static getItems(state: ItemStateModel) {
    return state.items;
  }

  @Selector()
  static isLoading(state: ItemStateModel) {
    return state.loading;
  }

  @Selector()
  static getItemById(state: ItemStateModel) {
    return (itemId: string) => {
      return state.items.find((item) => item._id === itemId);
    };
  }

  @Action(LoadItems)
  loadItems(ctx: StateContext<ItemStateModel>) {
    ctx.patchState({ loading: true });
    return this.colService.getCollection(1).pipe(
      tap((items: CollectionItem[]) => {
        ctx.patchState({ items, loading: false });
      })
    );
  }
}
