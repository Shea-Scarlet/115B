import { Component, Input, ViewChild, ViewContainerRef, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { BodyBoxComponent } from '../../app/body-box/body-box.component';
import { TabComponent } from '../../app/tabs/tab.component';
import { TabsComponent } from '../../app/tabs/tabs.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';


@Component({
  selector: 'DEMOBaseModal',
  standalone: true,
  imports: [CommonModule, BodyBoxComponent, TabComponent, TabsComponent],
  template: `
  <div class="modal-base">
      <div class="modal-header">
        <p class="page-label-text" *ngIf="!hasCustomTitle"> {{ pageTitle}} </p>
        <h1 class="header-text" *ngIf="!hasCustomTitle"> {{ headerText }} </h1>
        <p class="subtitle-text" *ngIf="!hasCustomTitle"> {{ subtitleText }} </p>
      </div>

      <div class="tab-drawer" >
        <!-- <app-tabs></app-tabs> -->
      </div>

      <div class="modal-body">
        <div>
          <app-body-box></app-body-box>
          <app-body-box title = "Set up roles"></app-body-box>
          <app-body-box title = "Review Scope of Work"></app-body-box>
        </div>
      </div>

      <div class="modal-footer">
        <!-- <PrevNext-Button></PrevNext-Button> -->
      </div>
    </div>
  `,
  styleUrls: ['./BaseModal.css'],
})
export class DEMOBaseModalComponent implements AfterViewInit{

  // loads components after initial modal loads for inserted components
  ngAfterViewInit() {
    this.loadComponents(); 
  }
  
  // Card count for the default ngif cards I have conditionally displayed when no components are given
  @Input() defaultCardCount = 8;
  defaultCardsArray = new Array(this.defaultCardCount).fill(null);

  @Input() pageTitle = "SET UP GUIDE";
  @Input() headerText = "Hi & Welcome Ed!";
  @Input() subtitleText = "This guide will take you through all the step to help you set up your Brinqa Platform.\
   To start with you'll need to set up your account and validate the system set up blueprint. Let's go!";

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


