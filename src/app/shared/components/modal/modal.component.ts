import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ModalOptions {
  headerTitle?: string;
  footerTitle?: string;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() visible = false;
  @Input() options!: ModalOptions;
  @Output() visibleChange = new EventEmitter<boolean>();

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
