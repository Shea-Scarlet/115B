import { Component, Input, ComponentFactoryResolver, 
  ViewContainerRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface ButtonInputs {
  label: string;
}

@Component({
  selector: 'PopUpForm-Button',
  standalone: true,
  template: `
    <button class="PopUpForm-Button" (click)="openDialog()">
      {{ label }}
    </button>
  `,
  styleUrls: ['./PopUpFormButton.css'],
})
export class PopUpFormButtonComponent {
  /**
   * Contents of Dialogue Box
   * @required
   */
  @Input()
  label = "Button Text Here";

  /**
   * Component to be rendered
   * @required
   */
  @Input() customComponent: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(this.customComponent, {
      data: { DialogueText: this.label },
      panelClass: 'custom-dialog-container'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
