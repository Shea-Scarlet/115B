import { Component, Input } from '@angular/core';

@Component({
  selector: 'ButtonsWithLinks',
  standalone: true,
  template: `
    <button
      [ngClass]="classes.join(' ')"
      (click)="handleButtonClick()"
    >
      {{ label }}
    </button>
  `,
  styleUrls: ['./ButtonsWithLinks.css'],
})
export class ButtonsWithLinksComponent {
  @Input() link = ''; // Default hyperlink
  @Input() primary = false;
  @Input() backgroundColor?: string;
  @Input() label = 'Button with no Link';

  public get classes(): string[] {
    const mode = this.primary
      ? 'ButtonsWithLinks--primary'
      : 'ButtonsWithLinks--secondary';

    return ['ButtonsWithLinks', mode];
  }

  handleButtonClick(): void {
    window.open(this.link, '_blank');
  }
}
