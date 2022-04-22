import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal-window',
  templateUrl: './delete-modal-window.component.html',
  styleUrls: ['./delete-modal-window.component.css'],
})
export class DeleteModalWindowComponent {
  @Output() isConfirmed = new EventEmitter();

  constructor() {}

  cancel() {
    this.isConfirmed.emit(false);
  }

  confirm() {
    this.isConfirmed.emit(true);
  }
}
