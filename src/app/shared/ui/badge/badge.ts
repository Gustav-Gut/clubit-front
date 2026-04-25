import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export type BadgeTheme = 'success' | 'warning' | 'error' | 'info' | 'default';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <span 
      class="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-bold border uppercase tracking-wide"
      [ngClass]="themeClasses">
      {{ (status ? 'COMMON.STATUS.' + status.toUpperCase() : label) | translate }}
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Badge implements OnChanges {
  @Input() label: string = '';
  @Input() theme: BadgeTheme = 'default';
  @Input() status: string = '';

  themeClasses: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.status) {
      this.themeClasses = this.getClassesForStatus(this.status);
    } else {
      this.themeClasses = this.getClassesForTheme(this.theme);
    }
  }

  private getClassesForStatus(status: string): string {
    const s = status.toLowerCase();
    if (s === 'paid' || s === 'active' || s === 'success') {
      return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    }
    if (s === 'pending' || s === 'processing' || s === 'warning') {
      return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    }
    if (s === 'overdue' || s === 'failed' || s === 'error') {
      return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
    }
    if (s === 'info' || s === 'new') {
      return 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20';
    }
    return 'bg-slate-500/10 text-slate-300 border-slate-500/20';
  }

  private getClassesForTheme(theme: BadgeTheme): string {
    switch (theme) {
      case 'success':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'warning':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'error':
        return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'info':
        return 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20';
      default:
        return 'bg-slate-500/10 text-slate-300 border-slate-500/20';
    }
  }
}
