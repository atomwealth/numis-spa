import { Routes } from '@angular/router';
import { CollectionComponent } from './pages/collection/collection.component';

export const routes: Routes = [
  { path: '', component: CollectionComponent }, // Default route
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route for a 404 page (optional)
];
