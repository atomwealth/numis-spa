import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../../shared/services/collection-service';
import { CollectionItem } from '../../../../shared/models/collection-model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-collection-main',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './collection-main.component.html',
  styleUrl: './collection-main.component.scss',
})
export class CollectionMainComponent implements OnInit {
  items: CollectionItem[] = [];
  fields: string[] = [];
  showAdd: boolean = false;

  constructor(private _colService: CollectionService) {}

  public ngOnInit() {
    this._colService.getCollection(1).subscribe((data) => {
      this.findOutFields(data);
      this.items = data;
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
