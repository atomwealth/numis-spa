import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CollectionService } from '../../../../shared/services/collection-service';
import { CollectionItem } from '../../../../shared/models/collection-model';

export interface Field {
  id: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
}

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
})
export class NewItemComponent {
  fields: Field[] = [
    { id: 'ref', type: 'text' },
    { id: 'local_ref', type: 'text' },
    { id: 'date', type: 'date' },
    { id: 'vendor', type: 'text' },
    { id: 'price', type: 'number' },
  ];
  form: FormGroup;
  busy: boolean = false;

  constructor(private fb: FormBuilder, private colService: CollectionService) {
    const formFields = this.fields.reduce((acc: any, field: Field) => {
      const name = field.id;
      acc[name] = [''];
      return acc;
    }, {});
    this.form = this.fb.group(formFields);
  }

  submit() {
    this.busy = true;
    const attributes = this.form.value;
    const item: CollectionItem = { _id: '', attributes };
    this.colService.addItem(item).subscribe((data) => {
      console.log(data);
      this.busy = false;
    });
  }
}
