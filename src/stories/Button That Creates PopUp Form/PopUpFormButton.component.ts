import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewContainerRef} from '@angular/core';
@Component({
  selector: 'PopUpForm-Button',
  standalone: true,
  imports: [CommonModule],
  template: ` 
<button
    type="button"
    (click)="toggleModal()"
    [ngClass]="classes"
    >
    {{ label }}
  </button>
      <div [ngClass]="{'popUpComponent': popUpForm}">
    <ng-container #componentContainer></ng-container>
  </div>
  `,
  styleUrls: ['./PopUpFormButton.css'],
})
export class PopUpFormButtonComponent {
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
  constructor() {
    this.componentContainer ??= {} as ViewContainerRef;
  }

  /**
   * Button contents
   * @required
   */
  @Input()
  label = 'Button';
  /**
   * Input to accept another component
   * @required
   */
  @Input() customComponent: any; 

  loadComponent() {
    const componentRef = this.componentContainer.createComponent(this.customComponent);
  }
  
  popUpForm = false;
  toggleModal() {
    this.popUpForm = true;
    if (this.popUpForm){
      const componentRef = this.componentContainer.createComponent(this.customComponent);
      
    }
  }

public get classes(): string[] {

    return ['PopUpForm-Button',];
  }
}

