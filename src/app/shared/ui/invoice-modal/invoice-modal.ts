import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-invoice-modal',
  standalone: true,
  imports: [],
  templateUrl: './invoice-modal.html',
  styleUrl: './invoice-modal.scss'
})
export class InvoiceModal {
  isOpen = input<boolean>(false);
  onClosed = output<void>();

  closeModal() {
    this.onClosed.emit();
  }
}
