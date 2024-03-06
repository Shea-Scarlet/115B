import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-tab-drawer-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatRipple],
  templateUrl: './tab-drawer-button.component.html',
  styleUrl: './tab-drawer-button.component.css'
})
export class TabDrawerButtonComponent {
  /**
   * Set the color depending on context
   */
  @Input()
  primary = false;

  /**
   * Button status:
   */
  @Input()
  status: 'incomplete' | 'complete' = 'complete';
  /**
   * indicate active button
   */
  @Input()
  active: boolean = false;
  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  dynamicBackgroundColor?: string;
  constructor() { }

  onButtonClick(event: Event) {
    event.preventDefault();
    // console.log('hello')
    // if (this.status === 'inProgress') {
    //   this.status = 'incomplete'
    // } else if (this.status === 'complete') {
    //   return;
    // } else {
    //   this.status = 'inProgress'
    // }

    // this.onClick.emit(event);
  }

  public get classes(): string[] {
    const mode = this.primary
      ? 'tab-drawer-button--primary'
      : 'tab-drawer-button--secondary';
    const activeClass = this.active
      ? 'tab-drawer-button--active'
      : '';

    return ['tab-drawer-button', `tab-drawer-button--${this.status}`, activeClass, mode]
  }
}
