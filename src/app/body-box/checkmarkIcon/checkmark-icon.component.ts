import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { OnboadingMatIconComponent } from '../../onboading-mat-icon/onboading-mat-icon.component';

@Component({
  selector: 'app-checkmark-icon',
  standalone: true,
  imports: [CommonModule, OnboadingMatIconComponent],
  template: `
    <app-onboading-mat-icon
      *ngIf="taskCompleted"
      size="lg"
      iconName="check_circle"
    ></app-onboading-mat-icon>
  `,
})
export class CheckmarkIconComponent {
  @Input() taskCompleted!: boolean;
}
