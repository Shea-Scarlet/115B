import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'PopUpDialogue-Button',
  standalone: true,
  imports: [CommonModule],
  template: ` 
    <div [ngClass]="{'OuterDiv': true}">
      <div [ngClass]="{'DialogueBox': true}" *ngIf="dialogueVisible">
        {{ DialogueText }}
      </div>
      <div [ngClass]="{'QuestionMarkButtonOuterDiv': true}">
        <button
          type="button"
          (click)="toggleDialogue()"
          [ngClass]="{'QuestionMarkButton': true}"
          > ?
        </button>
      </div>
    <div>`,
  styleUrls: ['./PopUpDialogueButton.css'],
})
export class PopUpDialogueButtonComponent {
  /**
   * Contents of Dialogue Box
   *
   * @required
   */
  @Input()
  DialogueText = "Dialogue Text Here"
  @Output() onClick = new EventEmitter<Event>();

  /**
   * By default, pop up dialogue box is hidden
   */
  dialogueVisible = false;
  toggleDialogue() {
    this.dialogueVisible = !this.dialogueVisible; // Toggle visibility
    if (this.dialogueVisible) {
      this.onClick.emit(); // Emit event when the dialogue becomes visible
    }
  }
}