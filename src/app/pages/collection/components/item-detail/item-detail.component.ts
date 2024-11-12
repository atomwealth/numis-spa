import { Component, InputSignal, effect, input, signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { ItemsState } from '../../../../shared/states/items.state';
import { map } from 'rxjs';
import { CollectionItem } from '../../../../shared/models/collection-model';
import { CommonModule } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-item-detail',
  styleUrls: ['item-detail.component.scss'],
  templateUrl: 'item-detail.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class ItemDetailComponent {
  itemId = input.required<string>();
  item = signal(<CollectionItem | undefined>undefined);

  constructor(private store: Store) {
    const itemIdObs$ = toObservable(this.itemId);
    itemIdObs$.subscribe({
      next: (id) => {
        const selector = ItemsState.getItemById;
        const item$ = this.store
          .select(selector)
          .pipe(map((fn) => fn(this.itemId())))
          .subscribe((d) => {
            this.item.set(d);
          });
      },
    });
  }
}
