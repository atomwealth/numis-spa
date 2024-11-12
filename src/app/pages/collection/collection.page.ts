import { Component } from '@angular/core';
import { CollectionMainComponent } from './components/collection-main/collection-main.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-collection-page',
  standalone: true,
  imports: [CollectionMainComponent, RouterOutlet, RouterLink],
  templateUrl: './collection.page.html',
  styleUrl: './collection.page.scss',
})
export class CollectionPage {}
