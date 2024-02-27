import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'PopUpForm-Button',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  template: ` 
<button
    *ngIf="!popUpForm"
    type="button"
    (click)="onButtonClick()"
    [ngClass]="classes"
    >
    {{ label }}
  </button>
  <div *ngIf="popUpForm" [ngClass]="{'OuterBaseModal': true}"> 
    <div [ngClass]="{'Header': true}"></div>
      <div [ngClass]="{'Body': true}">
        <mat-grid-list cols="1" rowHeight="100px">
          <mat-grid-tile>
            <mat-card>
              <mat-card-content>
              </mat-card-content>
            </mat-card>
          </mat-grid-tile>
          <mat-grid-tile>
            <mat-card></mat-card>
          </mat-grid-tile>
          <mat-grid-tile>
            <mat-card></mat-card>
          </mat-grid-tile>
          <mat-grid-tile>
            <mat-card></mat-card>
          </mat-grid-tile>
          <mat-grid-tile>
            <mat-card></mat-card>
          </mat-grid-tile>
        </mat-grid-list>
      </div>
    <div [ngClass]="{'Footer': true}"> Footer</div>
  </div>
  `,
  styleUrls: ['./PopUpFormButton.css'],
})
export class PopUpFormButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

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

  popUpForm = false;
  onButtonClick() {
    this.popUpForm = true;
    if (this.popUpForm){
      this.onClick.emit();
    }
  }

  public get classes(): string[] {
    const mode = this.primary
      ? 'PopUpForm-Button--primary'
      : 'PopUpForm-Button--secondary';

    return ['PopUpForm-Button', `PopUpForm-Button--${this.size}`, mode];
  }
}

