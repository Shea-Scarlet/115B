import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'BaseModal',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class = 'modal-base'>
    <div class = 'modal-header'>
      <p class = 'page-label-text'>SET UP GUIDE</p>
      <h1 class = 'header-text'>Welcome Starbucks!</h1>
      <p class = 'subtitle-text'> You're so awesome and you deserve at least two cookies.</p>
    </div>
    <div class = 'tab-drawer'>
      Im tabs
    </div>
    <div class = "modal-body">
      Im the body!
    </div>
    <div class = "modal-footer">
      Im the footer!
    </div>
  </div>
  `,
  styleUrls: ['./BaseModal.css'],
})
export class BaseModalComponent {

}
