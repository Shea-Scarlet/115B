import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [MatCardModule],
  template: `
  <mat-card class = "outter-card">
    <div class = "card-content-container">
      <div class = "photo-option">
      <img mat-card-md-image src="https://material.angular.io/assets/img/examples/shiba2.jpg"  alt="Image of a Shiba Inu">
      </div>
      <div class = "text-options">
        <div class = "title-option">
        Welcome to example!
        </div>
        <div class = "explanation-option">
        Im explaining the process of explaining! Woah, isnt that great!
        </div>
      </div>
      <div class = "data-field-1">
        pi = 89; 10 /= 31%
      </div>
      <div class = "data-field-2">
        23/9 % 09 + m, i / 2
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