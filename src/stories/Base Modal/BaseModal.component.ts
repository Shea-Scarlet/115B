import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import type { User } from '../user';

@Component({
  selector: 'BaseModal',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  template: `<div [ngClass]="{'OuterBaseModal': true}">
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
</div>`,
  styleUrls: ['./BaseModal.css'],
})
export class BaseModal{}