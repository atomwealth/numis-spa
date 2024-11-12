import { Component, OnInit, signal, input, Input, effect } from '@angular/core';
import { CollectionItem } from '../../../../shared/models/collection-model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { LoadItems } from '../../../../shared/actions/item.actions';
import { Observable, of } from 'rxjs';
import { ItemsState } from '../../../../shared/states/items.state';
import { Store } from '@ngxs/store';
import { StatusState } from '../../../../shared/states/status.state';
import { NewItemComponent } from '../new-item/new-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faRemove, faAdd } from '@fortawesome/free-solid-svg-icons';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-collection-main',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    NewItemComponent,
    FontAwesomeModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './collection-main.component.html',
  styleUrl: './collection-main.component.scss',
})
export class CollectionMainComponent implements OnInit {
  fields: string[] = [];
  showAdd: boolean = false;
  items$: Observable<CollectionItem[]> = of([]);
  loading$: Observable<boolean> = of(false);
  status$!: Observable<Date>;
  faEdit = faEdit;
  faDelete = faRemove;
  faPlus = faAdd;
  collectionId = input.required<string>();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.items$ = this.store.select(ItemsState.getItems);
    this.loading$ = this.store.select(ItemsState.isLoading);
    this.status$ = this.store.select(StatusState.getStatus);
    this.store.dispatch(new LoadItems(this.collectionId()));

    this.items$.subscribe((data) => {
      this.findOutFields(data);
    });
  }

  public addCoin() {
    this.showAdd = true;
    this.router.navigate(['item'], { relativeTo: this.route });
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
  deleteItem(itemId: string) {
    console.log(itemId);
  }
  editItem(item: CollectionItem) {
    console.log(item);
  }
  showItemDetail(item: CollectionItem) {
    this.router.navigate(['item', item._id], { relativeTo: this.route });
    this.showAdd = true;
  }
}
