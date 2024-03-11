import { Component, Input, ViewChild, ViewContainerRef, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { TabComponent } from '../../app/tabs/tab.component';
import { TabsComponent } from '../../app/tabs/tabs.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';
import { CardComponent } from '../Card/Card.component';
import { SaveContinueComponent } from '../SaveContinue/SaveContinue.component';

@Component({
  selector: 'DEMOPopup',
  standalone: true,
  imports: [CommonModule, PrevNextButtonComponent, CardComponent, SaveContinueComponent],
  template: `
  <div class="modal-base">
      <div class="modal-header">
        <p class="page-label-text" *ngIf="!hasCustomTitle"> {{ pageTitle}} </p>
        <h1 class="header-text" *ngIf="!hasCustomTitle"> {{ headerText }} </h1>
        <p class="subtitle-text" *ngIf="!hasCustomTitle"> {{ subtitleText }} </p>
      </div>

      <div class="tab-drawer" *ngif="tabDrawerComponent">
      </div>

      <div class="modal-body">
        <div>
          <Card imageUrl = "https://material.angular.io/assets/img/examples/shiba1.jpg" title = "Connector name" dataField1="Assets 10.000" dataField2="Findings Scanned 1.500"></Card>
          <Card title = "Connector name" dataField1="Assets 10.000" dataField2="Findings Scanned 1.500"></Card>
          <Card imageUrl = "https://material.angular.io/assets/img/examples/shiba1.jpg" title = "Connector name" dataField1="Assets 10.000" dataField2="Findings Scanned 1.500"></Card>
          <Card title = "Connector name" dataField1="Assets 10.000" dataField2="Findings Scanned 1.500"></Card>
          <Card imageUrl = "https://material.angular.io/assets/img/examples/shiba1.jpg" title = "Connector name" dataField1="Assets 10.000" dataField2="Findings Scanned 1.500"></Card>
        </div>
      </div>

      <div class="modal-footer">
        <PrevNext-Button></PrevNext-Button>
        <!-- <SaveContinueComponent></SaveContinueComponent> -->
      </div>
    </div>
  `,
  styleUrls: ['./Popup.css'],
})
export class DEMOPopupComponent implements AfterViewInit{

  // loads components after initial modal loads for inserted components
  ngAfterViewInit() {
    this.loadComponents(); 
  }
  
  // Card count for the default ngif cards I have conditionally displayed when no components are given
  @Input() defaultCardCount = 8;
  defaultCardsArray = new Array(this.defaultCardCount).fill(null);

  @Input() pageTitle = "VALIDATE DATA";
  @Input() headerText = "Validate your Risks & SLA's";
  @Input() subtitleText = "Confirm Brinqa has retrieved the expected number of assets and findings from each connector.";

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


