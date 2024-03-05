import { Component, Input, ViewChild, ViewContainerRef, AfterViewInit  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [MatCardModule],
  template: `
  <mat-card class="outter-card">
    <div class="card-content-container">
      <div class = "card-image">
        <img mat-card-md-image src="{{ imageUrl }}" alt="Card Image">
      </div>
      <div class = "card-title-area">
        <mat-card-title class = "title-option">{{ title }}</mat-card-title>
        <mat-card-subtitle class = "explanation-option">{{ explanation }}</mat-card-subtitle>
      </div>
      <div class="data-field-1">
        {{ dataField1 }} </div>
      <div class="data-field-2">
        {{ dataField2 }} </div>

      <div class="checkbox-field">
        <ng-container #checkboxField></ng-container> 
      </div>

      <div class="info-component-container">
        <ng-container #infoComponentContainer></ng-container>
      </div>
    </div>
  </mat-card>

  `,
  styleUrls: ['./Card.css'],
})
export class CardComponent {
  
  ngAfterViewInit() {
    this.loadComponents();
  }

  @Input() title = "Default Title!";
  @Input() explanation = "Explanation goes here!";
  @Input() dataField1 = "Some data = 123";
  @Input() dataField2 = "The other data = 098";
  @Input() imageUrl = "https://material.angular.io/assets/img/examples/shiba2.jpg"; 

  @Input() checkboxComponent: any;
  @Input() infoComponent: any;

  @ViewChild('checkboxField', { read: ViewContainerRef }) checkboxContainer!: ViewContainerRef;
  @ViewChild('infoComponentContainer', { read: ViewContainerRef }) infoComponentContainer!: ViewContainerRef;


  loadComponents() {
    if (this.checkboxComponent) {
      this.checkboxContainer.createComponent(this.checkboxComponent);
    }
    if (this.infoComponent) {
      this.infoComponentContainer.createComponent(this.infoComponent);
    }
  }
}
