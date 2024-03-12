import { Input, Component, ViewChild, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'YesNoExpButton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <section class="YesNoExpButton">
        <div class="button-container">
          <button type="button" (click)="toggleSelection(true)" [ngClass]="{ 'selected yes': isDialogExpanded === true }">Yes</button>
          <button type="button" (click)="toggleSelection(false)" [ngClass]="{ 'selected no': isDialogExpanded === false }">No</button>
        </div>
        <ng-container #componentContainer></ng-container>
      </section>
    </article>
  `,
  styleUrls: ['./YesNoExpButton.css'],
})

export class YesNoExpButton {
  //set dynamic component to any function user wants
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer!: ViewContainerRef;
  isDialogExpanded: boolean | null = null;
  componentCreated: boolean = false;

  constructor() {
    this.componentContainer ??= {} as ViewContainerRef;
  }

  /**
   * Input to accept another component
   * @required
   */
  @Input() customComponent: any;

  loadComponent() {
    const componentRef = this.componentContainer.createComponent(this.customComponent);
  }

  toggleSelection(isYesSelected: boolean | null = null) {
    if (isYesSelected !== null) {
      this.isDialogExpanded = isYesSelected;
      if (isYesSelected && !this.componentCreated) {
        const componentRef = this.componentContainer.createComponent(this.customComponent);
        this.componentCreated = true;
      } else if (!isYesSelected && this.componentCreated) {
        this.componentContainer.clear();
        this.componentCreated = false;
      }
    }
  }
};
