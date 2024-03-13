import { Component, Input } from '@angular/core';

@Component({
  selector: 'ButtonsWithLinks',
  standalone: true,
  template: `
    <button class = "ButtonsWithLinks" (click)="handleButtonClick()">
      {{ label }}
    </button>
  `,
  styleUrls: ['./ButtonsWithLinks.css'],
})
export class ButtonsWithLinksComponent {
  @Input() link = ''; // Default hyperlink
  @Input() label = 'Button with no Link';


  handleButtonClick(): void {
    window.open(this.link, '_blank');
  }
}
