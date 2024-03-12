import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'SaveContinueComponent',
  standalone: true,
  imports: [CommonModule],
  template: `
<button class = "SaveContinue"
    type="button"
    (click)="toggleModal()"
    [ngClass]="classes"
    >
    {{ label }}
  </button>
      <div [ngClass]="{'SaveContinueComponent': popUpForm}">
    <ng-container #componentContainer></ng-container>
  </div>
<!--  <p>Last saved at: {{ lastSavedDateTime }}</p>-->
  `,
  styleUrls: ['./SaveContinue.css'],
})
export class SaveContinueComponent {
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
  lastSavedDateTime: string = '';

  constructor() {
    this.componentContainer ??= {} as ViewContainerRef;
  }

  /**
   * Button contents
   * @required`
   */
  @Input()
  label = 'Save and Close';
  /**
   * Input to accept another component
   * @required
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() customComponent: any;

  loadComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const componentRef = this.componentContainer.createComponent(this.customComponent);
  }

  popUpForm = false;
  toggleModal() {
    this.popUpForm = !this.popUpForm;
    if (this.popUpForm){
      this.loadComponent();
    } else {
      this.componentContainer.clear();
    }
    this.lastSavedDateTime = new Date().toLocaleString();
  }

  public get classes(): string[] {
    return ['SaveContinueComponent',];
  }
}
