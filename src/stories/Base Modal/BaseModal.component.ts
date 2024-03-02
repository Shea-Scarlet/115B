import { Component, ContentChild, Input, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'BaseModal',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="modal-base">
      <div class="modal-header">
        <p class="page-label-text" *ngIf="!hasCustomTitle">You're awesome!</p>
        <h1 class="header-text" *ngIf="!hasCustomTitle">Welcome Home Depot!</h1>
        <p class="subtitle-text" *ngIf="!hasCustomTitle">You're so awesome and you deserve at least two cookies!</p>
      </div>

      <div class="tab-drawer" *ngIf="tabDrawerContent">
        <ng-container *ngTemplateOutlet="tabDrawerContent"></ng-container>
      </div>

      <!-- 
        Example usage:
        <BaseModal>
          <div modal-body>
            <app-card>Card Content 1</app-card>
            <app-body-box>Body Box Content</app-body-box>
            <app-card>Card Content 2</app-card>
          </div>
        </BaseModal
      -->
      <div class="modal-body">
        <ng-content select="[modal-body]"></ng-content>
        <div *ngIf="!hasCustomBody">I'm the default body!</div> 
      </div>

      <div class="modal-footer">
        <ng-content select="[modal-footer]"></ng-content>
        <div *ngIf="!hasCustomFooter">I'm the default footer!</div> 
      </div>
    </div>
  `,
  styleUrls: ['./BaseModal.css'],
})
export class BaseModalComponent {
  @Input() hasCustomTitle = false; 
  @Input() hasCustomBody = false;
  @Input() hasCustomFooter = false;

  /*  Uses Angular's @ContentChild decorator to query for a TemplateRef with the 'tabDrawer' 
      selector. This allows users to optionally slot in a template to represent the tab drawer's 
      content. If no matching content is found, tabDrawerContent will be null.                  */
  @ContentChild('tabDrawer') tabDrawerContent?: TemplateRef<any> | null;
}
