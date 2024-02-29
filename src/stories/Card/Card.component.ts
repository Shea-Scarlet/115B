import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [MatCardModule],
  template: `
  <mat-card class = "outter-card">
    <div class = "card-content-container">
      <div class = "card-image">
      <img mat-card-md-image src="https://material.angular.io/assets/img/examples/shiba2.jpg"  alt="Image of a Shiba Inu">
      </div>
      <div class = "card-text">
        <mat-card-title class = "title-option">Welcome to example!</mat-card-title>
        <mat-card-subtitle class = "explanation-option">I'm explaining the process of explaining! Woah, isn't that great!</mat-card-subtitle>
      </div>
      <div class = "data-field-1">
        Bagels Collected: 12,540
      </div>
      <div class = "data-field-2">
        Bread Sliced: 180,000
      </div>
      <div class = "checkbox-field">
        check?
      </div>
    </div>
  </mat-card>
  `,
  styleUrls: ['./Card.css'],
})
export class CardComponent {
}