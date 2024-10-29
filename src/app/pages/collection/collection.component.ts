import { Component } from '@angular/core';
import { CollectionMainComponent } from './components/collection-main/collection-main.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CollectionMainComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {}
