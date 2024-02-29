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
    (click)="toggleModal()"
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
  toggleModal() {
    this.popUpForm = true;
    if (this.popUpForm){
      this.onClick.emit();
    }
  }

  public get classes(): string[] {

    return ['PopUpForm-Button', `PopUpForm-Button--${this.size}`,];
  }
}

