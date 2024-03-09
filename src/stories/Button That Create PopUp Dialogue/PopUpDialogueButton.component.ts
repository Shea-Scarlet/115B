import { Component, Input, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'PopUpDialogue-Button',
  standalone: true,
  template: `
    <button class="QuestionMarkButton"(click)="openDialog()">?</button>`,
  styleUrls: ['./PopUpDialogueButton.css'],
  })
export class PopUpDialogueButtonComponent {

  /**
   * Contents of Dialogue Box
   * @required
   */
  @Input()
  DialogueText = "Dialogue Text Here"

  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(PopUpDialogue, {
      data: { DialogueText: this.DialogueText }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'PopUpDialogue',
  template: `
    <div class = 'DialogueBox'>
      {{ DialogueText }}
    </div>
  `,
  styleUrls: ['./PopUpDialogueButton.css'],
})
export class PopUpDialogue {
  DialogueText: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.DialogueText = this.data.DialogueText; // Assign data.DialogueText to local variable
  }
}