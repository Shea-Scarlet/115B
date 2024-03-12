import { Component, Input, ViewChild, ViewContainerRef, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoExpButton } from '../YesNoButtonExp/YesNoExpButton.component';
import { BodyBoxComponent } from '../../app/body-box/body-box.component';
import {CardComponent} from '../Card/Card.component';
@Component({
  selector: 'BaseModal',
  standalone: true,
  imports: [CommonModule, YesNoExpButton,
            BodyBoxComponent, CardComponent],
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
          <ng-container *ngIf="!hasCustomBody"> 
            <div class="default-card YesNo">
                <YesNoExpButton [customComponent]="BodyBox"/>
            </div>
          <div>
            <app-body-box></app-body-box>
          </div>
          </ng-container>
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
export class DEMO implements AfterViewInit{

  // loads components after initial modal loads for inserted components
  ngAfterViewInit() {
    this.loadComponents(); 
  }
  CardComponent = CardComponent;
  BodyBox = BodyBoxComponent;
  // Card count for the default ngif cards I have conditionally displayed when no components are given
  @Input() defaultCardCount = 8;
  defaultCardsArray = new Array(this.defaultCardCount).fill(null);

  @Input() pageTitle = "SET UP PAGE";
  @Input() headerText = "Welcome Home Depot!";
  @Input() subtitleText = "You're so awesome and you deserve at least two cookies! Today we are going to be helping you set up the connections from yours stuffs to our stuffs!";

  hasCustomTitle = false;
  hasCustomBody = false;
  hasCustomFooter = false;

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
      this.bodyContainer.createComponent(this.bodyComponent);
      this.hasCustomBody = true; /* to hide default body content upon component fill */
    }
    if (this.footerComponent) {
      this.footerContainer.createComponent(this.footerComponent);
      this.hasCustomFooter = true;
    }
  }


}


