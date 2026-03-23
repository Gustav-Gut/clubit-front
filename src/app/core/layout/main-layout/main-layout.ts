import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu';
import { ToastContainerComponent } from '../../../shared/ui/toast-container/toast-container.component';
import { ConfirmModalComponent } from '../../../shared/ui/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, Sidebar, MobileMenuComponent, ToastContainerComponent, ConfirmModalComponent],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayout {
}
