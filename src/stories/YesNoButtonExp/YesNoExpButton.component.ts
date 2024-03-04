import { Input, Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtons } from '../YesNoButttons/YesNoButtons.component';
import type { User } from '../user';

@Component({
  selector: 'YesNoExpButton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <section class="YesNoExpButton">
        <h2>Yes No Buttons Expansion Component</h2>
        <div class="button-container">
          <button type="button" (click)="toggleSelection(true)" [ngClass]="{ 'selected yes': isDialogExpanded === true }">Yes</button>
          <button type="button" (click)="toggleSelection(false)" [ngClass]="{ 'selected no': isDialogExpanded === false }">No</button>
        </div>
        <div *ngIf="isDialogExpanded === true">
          <h2>Second Question</h2>
          <p>Do you want to perform another action?</p>
        </div>
        <ng-container #dynamicComponentContainer></ng-container>
      </section>
    </article>
  `,
  styleUrls: ['./YesNoExpButton.css'],
})

export class YesNoExpButton {
  //set dynamic component to any function user wants 


  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  isDialogExpanded: boolean | null = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  toggleSelection(isYesSelected: boolean | null = null) {
    if (isYesSelected !== null) {
      this.isDialogExpanded = isYesSelected;
      if (isYesSelected) {
        this.loadDynamicComponent();
      } else {
        this.dynamicComponentContainer.clear();
      }
    }
  }
  @Input() DynamicComponent: any; 
//DynamicComponent replace with wanted component to drop down
  loadDynamicComponent() {
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    this.dynamicComponentContainer.clear();
    const dynamicComponentRef = this.dynamicComponentContainer.createComponent(dynamicComponentFactory);
  }
}

@Component({
  selector: 'app-dynamic-component',
  template: '<p>This is a dynamically loaded component</p>',
})
export class DynamicComponent {}