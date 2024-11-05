import { Component, OnInit } from '@angular/core';
import { CollectionItem } from '../../../../shared/models/collection-model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { LoadItems } from '../../../../shared/actions/item.actions';
import { Observable, of } from 'rxjs';
import { ItemsState } from '../../../../shared/states/items.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-collection-main',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './collection-main.component.html',
  styleUrl: './collection-main.component.scss',
})
export class CollectionMainComponent implements OnInit {
  fields: string[] = [];
  showAdd: boolean = false;
  items$: Observable<CollectionItem[]> = of([]);
  loading$: Observable<boolean> = of(false);

  constructor(private store: Store) {}

  public ngOnInit() {
    this.items$ = this.store.select(ItemsState.getItems);
    this.loading$ = this.store.select(ItemsState.isLoading);
    this.store.dispatch(new LoadItems(1));

    this.items$.subscribe((data) => {
      this.findOutFields(data);
    });
  }

  public addCoin() {
    this.showAdd = true;
  }

  public closeModal() {
    this.showAdd = false;
  }
  private findOutFields(items: CollectionItem[]) {
    let fields: string[] = [];
    items.forEach((item) => {
      const keys = Object.keys(item.attributes);
      let merged = fields.concat(keys);
      fields = merged.filter((item, idx) => merged.indexOf(item) === idx);
    });
    this.fields = fields;
  }
}
