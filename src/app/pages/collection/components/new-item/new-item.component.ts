import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    const formFields = this.fields.reduce((acc: any, field: Field) => {
      const name = field.id;
      acc[name] = [''];
      return acc;
    }, {});
    this.form = this.fb.group(formFields);
  }

  submit() {
    console.log(this.form.value);
  }
}
