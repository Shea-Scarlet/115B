import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'BaseModal',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class = modal-base>
    <div class = "modal-header">
      Im the header!
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
