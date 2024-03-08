import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-checkmark-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <mat-icon color="primary" *ngIf="taskCompleted">check_circle</mat-icon>
  `,
})
export class CheckmarkIconComponent {
  @Input() taskCompleted!: boolean;
}
