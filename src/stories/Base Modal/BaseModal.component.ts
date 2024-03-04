import { Component, Input, ViewChild, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'BaseModal',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="modal-base">
      <div class="modal-header">
        <p class="page-label-text" *ngIf="!hasCustomTitle"> {{ pageTitle}} </p>
        <h1 class="header-text" *ngIf="!hasCustomTitle"> {{ headerText }} </h1>
        <p class="subtitle-text" *ngIf="!hasCustomTitle"> {{ subtitleText }} </p>
      </div>

      <div class="tab-drawer" *ngIf="tabDrawerComponent">
        <ng-container #tabDrawerContainer></ng-container>
      </div>

      <div class="modal-body">
          
        <ng-container #bodyContainer></ng-container>
      </div>

      <div class="modal-footer">
        <button class="default-footer-button" *ngIf="!hasCustomFooter">Next</button>
        <ng-container #footerContainer></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./BaseModal.css'],
})
export class BaseModalComponent {
  
  @Input() defaultCardCount = 8;
  defaultCardsArray = new Array(this.defaultCardCount).fill(null);

  @Input() pageTitle = "SET UP PAGE";
  @Input() headerText = "Welcome Home Depot!";
  @Input() subtitleText = "You're so awesome and you deserve at least two cookies! Today we are going to be helping you set up the connections from yours stuffs to our stuffs!";

  @Input() hasCustomTitle = false; 
  @Input() hasCustomBody = false;
  @Input() hasCustomFooter = false;

  @Input() tabDrawerComponent: any;
  @Input() bodyComponent: any;
  @Input() footerComponent: any;

  @ViewChild('tabDrawerContainer', { read: ViewContainerRef }) tabDrawerContainer!: ViewContainerRef;
  @ViewChild('bodyContainer', { read: ViewContainerRef }) bodyContainer!: ViewContainerRef;
  @ViewChild('footerContainer', { read: ViewContainerRef }) footerContainer!: ViewContainerRef;
  
  loadComponents() {
    if (this.tabDrawerComponent) {
      this.tabDrawerContainer.createComponent(this.tabDrawerComponent);
    }
    if (this.bodyComponent) {
      this.hasCustomBody = true; /* to hide defualt body content upon component fill */
      this.bodyContainer.createComponent(this.bodyComponent);
    }
    if (this.footerComponent) {
      this.footerContainer.createComponent(this.footerComponent);
    }
  }

  

}

