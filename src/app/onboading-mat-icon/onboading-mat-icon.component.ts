import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-onboading-mat-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <mat-icon [ngStyle]="styleObject">{{ iconName }}</mat-icon>
  `,
  styleUrl: './onboading-mat-icon.component.css'
})
export class OnboadingMatIconComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() iconName: string = 'home';
  @Input() color: string = 'black';

  styleObject: { [key: string]: string | undefined } = {};

  ngOnInit() {
    switch(this.size) {
      case 'sm':
        this.styleObject = {
          'padding-top': '4px',
          'font-size': '20px',
          'height': '20px',
          'width': '20px',
          'color': this.color,
        }
        break;
      case 'md':
        this.styleObject = {
          'padding-top': '4px',
          'font-size': '24px',
          'height': '24px',
          'width': '24px',
          'color': this.color,
        }
        break;
      case 'lg':
        this.styleObject = {
          'padding-top': '4px',
          'font-size': '30px',
          'height': '30px',
          'width': '30px',
          'color': this.color,
        }
        break;
    }
  }
}

