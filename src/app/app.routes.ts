import { Routes } from '@angular/router';
import { CollectionPage } from './pages/collection/collection.page';
import { CollectionMainComponent } from './pages/collection/components/collection-main/collection-main.component';
import { NewItemComponent } from './pages/collection/components/new-item/new-item.component';
import { ItemDetailComponent } from './pages/collection/components/item-detail/item-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full',
  },
  {
    path: 'collection',
    component: CollectionPage,
    children: [
      {
        path: ':collectionId',
        component: CollectionMainComponent,
        children: [
          { path: 'item', component: NewItemComponent },
          { path: 'item/:itemId', component: ItemDetailComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route for a 404 page (optional)
];
