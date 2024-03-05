// tab.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="active" class="tab-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() active = false;
}
