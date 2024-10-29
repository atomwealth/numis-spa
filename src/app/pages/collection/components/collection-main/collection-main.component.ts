import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../../shared/services/collection-service';
import { CollectionItem } from '../../../../shared/models/collection-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection-main.component.html',
  styleUrl: './collection-main.component.scss',
})
export class CollectionMainComponent implements OnInit {
  items: CollectionItem[] = [];

  constructor(private _colService: CollectionService) {}

  public ngOnInit() {
    this._colService.getCollection(1).subscribe((data) => {
      this.items = data.items;
    });
  }
}
